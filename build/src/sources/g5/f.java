package g5;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f23977a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23978b;

    /* renamed from: c  reason: collision with root package name */
    private final Throwable f23979c;

    public f(Drawable drawable, h hVar, Throwable th2) {
        super(null);
        this.f23977a = drawable;
        this.f23978b = hVar;
        this.f23979c = th2;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f23977a;
    }

    @Override // g5.i
    public h b() {
        return this.f23978b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (Intrinsics.areEqual(a(), fVar.a()) && Intrinsics.areEqual(b(), fVar.b()) && Intrinsics.areEqual(this.f23979c, fVar.f23979c)) {
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
        return (((i10 * 31) + b().hashCode()) * 31) + this.f23979c.hashCode();
    }
}
