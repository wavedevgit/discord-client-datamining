package he;

import android.text.TextUtils;
import com.facebook.react.uimanager.ViewProps;
import java.util.regex.Pattern;
import oi.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: d  reason: collision with root package name */
    private static final Pattern f25889d = Pattern.compile("\\s+");

    /* renamed from: e  reason: collision with root package name */
    private static final u f25890e = u.v("auto", ViewProps.NONE);

    /* renamed from: f  reason: collision with root package name */
    private static final u f25891f = u.w("dot", "sesame", "circle");

    /* renamed from: g  reason: collision with root package name */
    private static final u f25892g = u.v("filled", "open");

    /* renamed from: h  reason: collision with root package name */
    private static final u f25893h = u.w("after", "before", "outside");

    /* renamed from: a  reason: collision with root package name */
    public final int f25894a;

    /* renamed from: b  reason: collision with root package name */
    public final int f25895b;

    /* renamed from: c  reason: collision with root package name */
    public final int f25896c;

    private b(int i10, int i11, int i12) {
        this.f25894a = i10;
        this.f25895b = i11;
        this.f25896c = i12;
    }

    public static b a(String str) {
        if (str == null) {
            return null;
        }
        String e10 = ni.b.e(str.trim());
        if (e10.isEmpty()) {
            return null;
        }
        return b(u.p(TextUtils.split(e10, f25889d)));
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x004b  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00cf  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x00ee  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static he.b b(oi.u r7) {
        /*
            Method dump skipped, instructions count: 248
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: he.b.b(oi.u):he.b");
    }
}
