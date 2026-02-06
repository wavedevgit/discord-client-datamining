package go;

import com.withpersona.sdk2.inquiry.document.network.CreateDocumentRequest;
import com.withpersona.sdk2.inquiry.document.network.CreateDocumentResponse;
import com.withpersona.sdk2.inquiry.document.network.DocumentFileUploadResponse;
import com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest;
import java.util.List;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import okhttp3.MultipartBody;
import org.jetbrains.annotations.NotNull;
import vv.z;
import xv.f;
import xv.i;
import xv.k;
import xv.l;
import xv.o;
import xv.q;
import xv.s;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J*\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\b\b\u0001\u0010\u0003\u001a\u00020\u00022\b\b\u0001\u0010\u0005\u001a\u00020\u0004H§@¢\u0006\u0004\b\b\u0010\tJ*\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00070\u00062\b\b\u0001\u0010\u0003\u001a\u00020\u00022\b\b\u0001\u0010\n\u001a\u00020\u0002H§@¢\u0006\u0004\b\u000b\u0010\fJ0\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00100\u00062\b\b\u0001\u0010\u0003\u001a\u00020\u00022\u000e\b\u0001\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u000e0\rH§@¢\u0006\u0004\b\u0011\u0010\u0012J(\u0010\u0014\u001a\u0006\u0012\u0002\b\u00030\u00062\b\b\u0001\u0010\u0003\u001a\u00020\u00022\b\b\u0001\u0010\u0013\u001a\u00020\u0002H§@¢\u0006\u0004\b\u0014\u0010\fJ2\u0010\u0017\u001a\u0006\u0012\u0002\b\u00030\u00062\b\b\u0001\u0010\u0003\u001a\u00020\u00022\b\b\u0001\u0010\u0015\u001a\u00020\u00022\b\b\u0001\u0010\u0005\u001a\u00020\u0016H§@¢\u0006\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lgo/b;", "", "", "sessionToken", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest;", "request", "Lvv/z;", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentResponse;", "a", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "documentId", "b", "(Ljava/lang/String;Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "", "Lokhttp3/MultipartBody$b;", "document", "Lcom/withpersona/sdk2/inquiry/document/network/DocumentFileUploadResponse;", "c", "(Ljava/lang/String;Ljava/util/List;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "fileId", "d", "inquiryId", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest;", "e", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b {
    @o("/api/internal/verify/v1/documents")
    Object a(@i("Authorization") @NotNull String str, @xv.a @NotNull CreateDocumentRequest createDocumentRequest, @NotNull Continuation<? super z<CreateDocumentResponse>> continuation);

    @f("/api/internal/verify/v1/documents/{documentId}")
    Object b(@i("Authorization") @NotNull String str, @s("documentId") @NotNull String str2, @NotNull Continuation<? super z<CreateDocumentResponse>> continuation);

    @k({"Accept: multipart/form-data"})
    @o("/api/internal/verify/v1/document-files")
    @l
    Object c(@i("Authorization") @NotNull String str, @q @NotNull List<MultipartBody.b> list, @NotNull Continuation<? super z<DocumentFileUploadResponse>> continuation);

    @xv.b("/api/internal/verify/v1/document-files/{fileId}")
    Object d(@i("Authorization") @NotNull String str, @s("fileId") @NotNull String str2, @NotNull Continuation<? super z<?>> continuation);

    @o("/api/internal/verify/v1/inquiries/{inquiryId}/transition")
    Object e(@i("Authorization") @NotNull String str, @s("inquiryId") @NotNull String str2, @xv.a @NotNull SubmitDocumentRequest submitDocumentRequest, @NotNull Continuation<? super z<?>> continuation);
}
