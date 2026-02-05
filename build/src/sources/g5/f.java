package g5;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f23724a;

    /* renamed from: b  reason: collision with root package name */
    private final h f23725b;

    /* renamed from: c  reason: collision with root package name */
    private final Throwable f23726c;

    public f(Drawable drawable, h hVar, Throwable th2) {
        super(null);
        this.f23724a = drawable;
        this.f23725b = hVar;
        this.f23726c = th2;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f23724a;
    }

    @Override // g5.i
    public h b() {
        return this.f23725b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (Intrinsics.areEqual(a(), fVar.a()) && Intrinsics.areEqual(b(), fVar.b()) && Intrinsics.areEqual(this.f23726c, fVar.f23726c)) {
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
        return (((i10 * 31) + b().hashCode()) * 31) + this.f23726c.hashCode();
    }
}
