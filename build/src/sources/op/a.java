package op;

import java.util.List;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import okhttp3.MultipartBody;
import org.jetbrains.annotations.NotNull;
import vv.z;
import xv.i;
import xv.k;
import xv.l;
import xv.o;
import xv.q;
import xv.s;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J8\u0010\t\u001a\u0006\u0012\u0002\b\u00030\b2\b\b\u0001\u0010\u0003\u001a\u00020\u00022\b\b\u0001\u0010\u0004\u001a\u00020\u00022\u000e\b\u0001\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H§@¢\u0006\u0004\b\t\u0010\n¨\u0006\u000b"}, d2 = {"Lop/a;", "", "", "sessionToken", "inquiryId", "", "Lokhttp3/MultipartBody$b;", "body", "Lvv/z;", "a", "(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {
    @k({"Accept: multipart/form-data"})
    @o("/api/internal/verify/v1/inquiries/{inquiryId}/transition")
    @l
    Object a(@i("Authorization") @NotNull String str, @s("inquiryId") @NotNull String str2, @q @NotNull List<MultipartBody.b> list, @NotNull Continuation<? super z<?>> continuation);
}
