package z9;

import android.net.Uri;
import com.facebook.common.internal.Fn;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    public static final l f55685a = new l();

    private l() {
    }

    public static final Uri a(Object obj, Object obj2, Object[] objArr, Fn requestToUri) {
        Uri uri;
        Uri uri2;
        Intrinsics.checkNotNullParameter(requestToUri, "requestToUri");
        if (obj != null) {
            uri = (Uri) requestToUri.apply(obj);
        } else {
            uri = null;
        }
        if (uri != null) {
            return uri;
        }
        if (objArr != null && objArr.length != 0) {
            Object obj3 = objArr[0];
            if (obj3 != null) {
                uri2 = (Uri) requestToUri.apply(obj3);
            } else {
                uri2 = null;
            }
            if (uri2 != null) {
                return uri2;
            }
        }
        if (obj2 == null) {
            return null;
        }
        return (Uri) requestToUri.apply(obj2);
    }
}
