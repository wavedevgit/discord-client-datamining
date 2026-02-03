package ge;

import android.text.TextUtils;
import com.facebook.react.uimanager.ViewProps;
import java.util.regex.Pattern;
import ji.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b {

    /* renamed from: d  reason: collision with root package name */
    private static final Pattern f25978d = Pattern.compile("\\s+");

    /* renamed from: e  reason: collision with root package name */
    private static final u f25979e = u.t("auto", ViewProps.NONE);

    /* renamed from: f  reason: collision with root package name */
    private static final u f25980f = u.u("dot", "sesame", "circle");

    /* renamed from: g  reason: collision with root package name */
    private static final u f25981g = u.t("filled", "open");

    /* renamed from: h  reason: collision with root package name */
    private static final u f25982h = u.u("after", "before", "outside");

    /* renamed from: a  reason: collision with root package name */
    public final int f25983a;

    /* renamed from: b  reason: collision with root package name */
    public final int f25984b;

    /* renamed from: c  reason: collision with root package name */
    public final int f25985c;

    private b(int i10, int i11, int i12) {
        this.f25983a = i10;
        this.f25984b = i11;
        this.f25985c = i12;
    }

    public static b a(String str) {
        if (str == null) {
            return null;
        }
        String e10 = ii.b.e(str.trim());
        if (e10.isEmpty()) {
            return null;
        }
        return b(u.n(TextUtils.split(e10, f25978d)));
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x004b  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00cf  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x00ee  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static ge.b b(ji.u r7) {
        /*
            Method dump skipped, instructions count: 248
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ge.b.b(ji.u):ge.b");
    }
}
