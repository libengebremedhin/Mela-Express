from rest_framework import serializers

from .models import *
from user.models import User, Profile, serviceProviders
from user.serializers import ServiceProviderSeralizer, ProfileSerializer


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class first(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','first_name','last_name','email','username']

class second(serializers.ModelSerializer):
    user = first(many=False, read_only=True)
    class Meta:
        model = Profile
        fields = '__all__'

class third(serializers.ModelSerializer):
    profile = second(many=False, read_only=True)
    class Meta:
        model = serviceProviders
        fields = '__all__'


class ServiceListSerializer(serializers.ModelSerializer):
    creator = third(many=False, read_only=True)
    class Meta:
        model = Service
        fields = '__all__'

class PathSerializer(serializers.ModelSerializer):
    class Meta:
        model = Path
        fields = '__all__'