# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [sym/enums/service.proto](#sym/enums/service.proto)
    - [Service](#sym.enums.Service)
  
- [sym/models/resource.proto](#sym/models/resource.proto)
    - [Resource](#sym.models.Resource)
  
- [sym/models/schema.proto](#sym/models/schema.proto)
    - [Schema](#sym.models.Schema)
  
- [sym/models/user.proto](#sym/models/user.proto)
    - [User](#sym.models.User)
    - [User.Identity](#sym.models.User.Identity)
  
- [sym/models/uuid.proto](#sym/models/uuid.proto)
    - [UUID](#sym.models.UUID)
  
- [sym/messages/approval.proto](#sym/messages/approval.proto)
    - [Approval](#sym.messages.Approval)
    - [Approval.Meta](#sym.messages.Approval.Meta)
  
- [sym/messages/dispatch.proto](#sym/messages/dispatch.proto)
    - [Dispatch](#sym.messages.Dispatch)
  
- [sym/messages/expiration.proto](#sym/messages/expiration.proto)
    - [Expiration](#sym.messages.Expiration)
    - [Expiration.Target](#sym.messages.Expiration.Target)
  
- [sym/messages/request.proto](#sym/messages/request.proto)
    - [Request](#sym.messages.Request)
    - [Request.Meta](#sym.messages.Request.Meta)
    - [Request.Target](#sym.messages.Request.Target)
  
- [sym/messages/response.proto](#sym/messages/response.proto)
    - [ApprovalResponse](#sym.messages.ApprovalResponse)
    - [DispatchResponse](#sym.messages.DispatchResponse)
    - [ExpirationResponse](#sym.messages.ExpirationResponse)
  
- [Scalar Value Types](#scalar-value-types)



<a name="sym/enums/service.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/enums/service.proto


 


<a name="sym.enums.Service"></a>

### Service
Service represents a system Sym integrates with

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Unidentified service |
| SLACK | 1 | Slack |
| OKTA | 2 | Okta |
| AWS | 3 | AWS |
| CUSTOM | 4 | Customer service |


 

 

 



<a name="sym/models/resource.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/models/resource.proto



<a name="sym.models.Resource"></a>

### Resource
Resource represents some entity from a given service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| service | [sym.enums.Service](#sym.enums.Service) |  | The service this is a resource in |
| id | [string](#string) |  | How the resource is identified |





 

 

 

 



<a name="sym/models/schema.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/models/schema.proto



<a name="sym.models.Schema"></a>

### Schema



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int32](#int32) |  |  |





 

 

 

 



<a name="sym/models/user.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/models/user.proto



<a name="sym.models.User"></a>

### User
User holds multiple Identities for various integrated services.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [UUID](#sym.models.UUID) |  | The uuid for a user remains constant across all services |
| current_identity | [User.Identity](#sym.models.User.Identity) |  | current_identity is the system the user is currently interacting with sym from |
| identities | [User.Identity](#sym.models.User.Identity) | repeated | identities this user has |






<a name="sym.models.User.Identity"></a>

### User.Identity
Identity of the user in a given service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| service | [sym.enums.Service](#sym.enums.Service) |  |  |
| id | [string](#string) |  |  |





 

 

 

 



<a name="sym/models/uuid.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/models/uuid.proto



<a name="sym.models.UUID"></a>

### UUID



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [string](#string) |  |  |





 

 

 

 



<a name="sym/messages/approval.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/messages/approval.proto



<a name="sym.messages.Approval"></a>

### Approval
Approval messages represent approval for a target user to use a resource


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [sym.models.UUID](#sym.models.UUID) |  |  |
| schema | [sym.models.Schema](#sym.models.Schema) |  |  |
| request | [Request](#sym.messages.Request) |  | The request that was approved |
| meta | [Approval.Meta](#sym.messages.Approval.Meta) |  | Metadata about the approval |






<a name="sym.messages.Approval.Meta"></a>

### Approval.Meta
Metadata about an approval


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| approver | [sym.models.User](#sym.models.User) |  | The approving user |





 

 

 

 



<a name="sym/messages/dispatch.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/messages/dispatch.proto



<a name="sym.messages.Dispatch"></a>

### Dispatch
Dispatch messages wrap another message type


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [string](#string) |  |  |
| message | [google.protobuf.Any](#google.protobuf.Any) |  |  |





 

 

 

 



<a name="sym/messages/expiration.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/messages/expiration.proto



<a name="sym.messages.Expiration"></a>

### Expiration
Expiration messages represent an approval that is now expired


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [sym.models.UUID](#sym.models.UUID) |  |  |
| schema | [sym.models.Schema](#sym.models.Schema) |  |  |
| target | [Expiration.Target](#sym.messages.Expiration.Target) |  | The expiring user and resource |






<a name="sym.messages.Expiration.Target"></a>

### Expiration.Target
Target combines the expiring user and resource


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [sym.models.User](#sym.models.User) |  | user to remove access from |
| resource | [sym.models.Resource](#sym.models.Resource) |  | resource to remove access to |





 

 

 

 



<a name="sym/messages/request.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/messages/request.proto



<a name="sym.messages.Request"></a>

### Request
Request represents some user request for access


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [sym.models.UUID](#sym.models.UUID) |  |  |
| schema | [sym.models.Schema](#sym.models.Schema) |  |  |
| target | [Request.Target](#sym.messages.Request.Target) |  | The target user and resource |
| meta | [Request.Meta](#sym.messages.Request.Meta) |  | Metadata about the request |






<a name="sym.messages.Request.Meta"></a>

### Request.Meta
Metadata about the request


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reason | [string](#string) |  | user-defined arbitrary reason |






<a name="sym.messages.Request.Target"></a>

### Request.Target
Target combines the requesting user and resource


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [sym.models.User](#sym.models.User) |  | user to grant access to |
| resource | [sym.models.Resource](#sym.models.Resource) |  | resource to give access to |





 

 

 

 



<a name="sym/messages/response.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## sym/messages/response.proto



<a name="sym.messages.ApprovalResponse"></a>

### ApprovalResponse
ApprovalResponse gets sent back upon successful approvals


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ok | [bool](#bool) |  |  |
| error | [string](#string) |  | error message when not ok |






<a name="sym.messages.DispatchResponse"></a>

### DispatchResponse
DispatchResponse gets sent back by dispatch requests


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ok | [bool](#bool) |  |  |
| error | [string](#string) |  | error message when not ok |






<a name="sym.messages.ExpirationResponse"></a>

### ExpirationResponse
ExpirationResponse gets sent back upon successful expirations


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ok | [bool](#bool) |  |  |
| error | [string](#string) |  | error message when not ok |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

