package x4;

import com.reactnativecommunity.clipboard.ClipboardModule;
import java.util.Set;
import kotlin.collections.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f53413a = x0.i(ClipboardModule.MIMETYPE_JPEG, ClipboardModule.MIMETYPE_WEBP, ClipboardModule.MIMETYPE_HEIC, ClipboardModule.MIMETYPE_HEIF);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f53414a;

        static {
            int[] iArr = new int[n.values().length];
            try {
                iArr[n.f53407e.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[n.f53406d.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[n.f53408i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f53414a = iArr;
        }
    }

    public static final boolean a(l lVar) {
        if (lVar.a() > 0) {
            return true;
        }
        return false;
    }

    public static final boolean b(l lVar) {
        if (lVar.a() != 90 && lVar.a() != 270) {
            return false;
        }
        return true;
    }

    public static final boolean c(n nVar, String str) {
        int i10 = a.f53414a[nVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return false;
            }
            if (i10 == 3) {
                return true;
            }
            throw new jr.p();
        } else if (str == null || !f53413a.contains(str)) {
            return false;
        } else {
            return true;
        }
    }
}
