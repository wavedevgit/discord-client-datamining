package lc;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l0 extends IOException {

    /* renamed from: d  reason: collision with root package name */
    public final boolean f36617d;

    /* renamed from: e  reason: collision with root package name */
    public final int f36618e;

    /* JADX INFO: Access modifiers changed from: protected */
    public l0(String str, Throwable th2, boolean z10, int i10) {
        super(str, th2);
        this.f36617d = z10;
        this.f36618e = i10;
    }

    public static l0 a(String str, Throwable th2) {
        return new l0(str, th2, true, 1);
    }

    public static l0 b(String str, Throwable th2) {
        return new l0(str, th2, true, 0);
    }

    public static l0 c(String str, Throwable th2) {
        return new l0(str, th2, true, 4);
    }

    public static l0 d(String str) {
        return new l0(str, null, false, 1);
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return super.getMessage() + "{contentIsMalformed=" + this.f36617d + ", dataType=" + this.f36618e + "}";
    }
}
