package g5;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f25828a;

    /* renamed from: b  reason: collision with root package name */
    private final h f25829b;

    /* renamed from: c  reason: collision with root package name */
    private final Throwable f25830c;

    public f(Drawable drawable, h hVar, Throwable th2) {
        super(null);
        this.f25828a = drawable;
        this.f25829b = hVar;
        this.f25830c = th2;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f25828a;
    }

    @Override // g5.i
    public h b() {
        return this.f25829b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (Intrinsics.areEqual(a(), fVar.a()) && Intrinsics.areEqual(b(), fVar.b()) && Intrinsics.areEqual(this.f25830c, fVar.f25830c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        Drawable a10 = a();
        if (a10 != null) {
            i10 = a10.hashCode();
        } else {
            i10 = 0;
        }
        return (((i10 * 31) + b().hashCode()) * 31) + this.f25830c.hashCode();
    }
}
