# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: sym/messages/approval.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from sym.messages import request_pb2 as sym_dot_messages_dot_request__pb2
from sym.models import schema_pb2 as sym_dot_models_dot_schema__pb2
from sym.models import user_pb2 as sym_dot_models_dot_user__pb2
from sym.models import uuid_pb2 as sym_dot_models_dot_uuid__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='sym/messages/approval.proto',
  package='sym.messages',
  syntax='proto3',
  serialized_options=b'Z%github.com/symopsio/types/go/messages',
  serialized_pb=b'\n\x1bsym/messages/approval.proto\x12\x0csym.messages\x1a\x1asym/messages/request.proto\x1a\x17sym/models/schema.proto\x1a\x15sym/models/user.proto\x1a\x15sym/models/uuid.proto\"\xcb\x01\n\x08\x41pproval\x12\x1c\n\x02id\x18\x01 \x01(\x0b\x32\x10.sym.models.UUID\x12\"\n\x06schema\x18\x02 \x01(\x0b\x32\x12.sym.models.Schema\x12&\n\x07request\x18\x03 \x01(\x0b\x32\x15.sym.messages.Request\x12)\n\x04meta\x18\x04 \x01(\x0b\x32\x1b.sym.messages.Approval.Meta\x1a*\n\x04Meta\x12\"\n\x08\x61pprover\x18\x01 \x01(\x0b\x32\x10.sym.models.UserB\'Z%github.com/symopsio/types/go/messagesb\x06proto3'
  ,
  dependencies=[sym_dot_messages_dot_request__pb2.DESCRIPTOR,sym_dot_models_dot_schema__pb2.DESCRIPTOR,sym_dot_models_dot_user__pb2.DESCRIPTOR,sym_dot_models_dot_uuid__pb2.DESCRIPTOR,])




_APPROVAL_META = _descriptor.Descriptor(
  name='Meta',
  full_name='sym.messages.Approval.Meta',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='approver', full_name='sym.messages.Approval.Meta.approver', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=306,
  serialized_end=348,
)

_APPROVAL = _descriptor.Descriptor(
  name='Approval',
  full_name='sym.messages.Approval',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='sym.messages.Approval.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='schema', full_name='sym.messages.Approval.schema', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request', full_name='sym.messages.Approval.request', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='meta', full_name='sym.messages.Approval.meta', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_APPROVAL_META, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=145,
  serialized_end=348,
)

_APPROVAL_META.fields_by_name['approver'].message_type = sym_dot_models_dot_user__pb2._USER
_APPROVAL_META.containing_type = _APPROVAL
_APPROVAL.fields_by_name['id'].message_type = sym_dot_models_dot_uuid__pb2._UUID
_APPROVAL.fields_by_name['schema'].message_type = sym_dot_models_dot_schema__pb2._SCHEMA
_APPROVAL.fields_by_name['request'].message_type = sym_dot_messages_dot_request__pb2._REQUEST
_APPROVAL.fields_by_name['meta'].message_type = _APPROVAL_META
DESCRIPTOR.message_types_by_name['Approval'] = _APPROVAL
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Approval = _reflection.GeneratedProtocolMessageType('Approval', (_message.Message,), {

  'Meta' : _reflection.GeneratedProtocolMessageType('Meta', (_message.Message,), {
    'DESCRIPTOR' : _APPROVAL_META,
    '__module__' : 'sym.messages.approval_pb2'
    # @@protoc_insertion_point(class_scope:sym.messages.Approval.Meta)
    })
  ,
  'DESCRIPTOR' : _APPROVAL,
  '__module__' : 'sym.messages.approval_pb2'
  # @@protoc_insertion_point(class_scope:sym.messages.Approval)
  })
_sym_db.RegisterMessage(Approval)
_sym_db.RegisterMessage(Approval.Meta)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
