from django import forms
from blog.models import BlogComponentTypes


class BlogComponentInlineFormset(forms.models.BaseInlineFormSet):
    def clean(self):
        for form in self.forms:
            form_data = form.cleaned_data
            component_type = form_data.get("type", "")

            if component_type not in [BlogComponentTypes.IMAGE, BlogComponentTypes.TEXT]:
                raise forms.ValidationError("Provide valid type of blog component")

            if (
                component_type == BlogComponentTypes.IMAGE
                and form_data.get("image") is None
            ):
                raise forms.ValidationError("Provide a image for IMAGE Component")

            if (
                component_type == BlogComponentTypes.TEXT
                and not form_data.get("text")
            ):
                raise forms.ValidationError("Provide some text for TEXT Component")
            
        return super(BlogComponentInlineFormset, self).clean()
