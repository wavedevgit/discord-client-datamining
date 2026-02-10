package g5;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f23502a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23503b;

    /* renamed from: c  reason: collision with root package name */
    private final Throwable f23504c;

    public f(Drawable drawable, h hVar, Throwable th2) {
        super(null);
        this.f23502a = drawable;
        this.f23503b = hVar;
        this.f23504c = th2;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f23502a;
    }

    @Override // g5.i
    public h b() {
        return this.f23503b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (Intrinsics.areEqual(a(), fVar.a()) && Intrinsics.areEqual(b(), fVar.b()) && Intrinsics.areEqual(this.f23504c, fVar.f23504c)) {
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
        return (((i10 * 31) + b().hashCode()) * 31) + this.f23504c.hashCode();
    }
}
