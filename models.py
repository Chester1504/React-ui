from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=100, blank=True, null=True)
    middle_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    address = models.TextField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)  # Adjusted max_length for international phone numbers
    employment_status = models.CharField(max_length=100, blank=True, null=True)
    name_ext = models.CharField(max_length=10, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    place_of_birth = models.CharField(max_length=100, blank=True, null=True)
    sex = models.CharField(max_length=10, blank=True, null=True)
    civil_status = models.CharField(max_length=20, blank=True, null=True)
    citizenship = models.CharField(max_length=50, blank=True, null=True)
    house_no = models.CharField(max_length=10, blank=True, null=True)
    street = models.CharField(max_length=100, blank=True, null=True)
    subd = models.CharField(max_length=100, blank=True, null=True)
    brgy = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    province = models.CharField(max_length=100, blank=True, null=True)
    zipcode = models.CharField(max_length=10, blank=True, null=True)
    father_surname = models.CharField(max_length=100, blank=True, null=True)
    father_first_name = models.CharField(max_length=100, blank=True, null=True)
    father_middle_name = models.CharField(max_length=100, blank=True, null=True)
    father_name_ext = models.CharField(max_length=10, blank=True, null=True)
    mother_surname = models.CharField(max_length=100, blank=True, null=True)
    mother_first_name = models.CharField(max_length=100, blank=True, null=True)
    mother_middle_name = models.CharField(max_length=100, blank=True, null=True)
    mother_name_ext = models.CharField(max_length=10, blank=True, null=True)
    elementary = models.CharField(max_length=100, blank=True, null=True)
    secondary = models.CharField(max_length=100, blank=True, null=True)
    vocational_tradecourse = models.CharField(max_length=100, blank=True, null=True)
    college = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
