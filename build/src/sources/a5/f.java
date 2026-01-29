package a5;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends g {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f394a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f395b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f396c;

    public f(Drawable drawable, boolean z10, x4.h hVar) {
        super(null);
        this.f394a = drawable;
        this.f395b = z10;
        this.f396c = hVar;
    }

    public final x4.h a() {
        return this.f396c;
    }

    public final Drawable b() {
        return this.f394a;
    }

    public final boolean c() {
        return this.f395b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (Intrinsics.areEqual(this.f394a, fVar.f394a) && this.f395b == fVar.f395b && this.f396c == fVar.f396c) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f394a.hashCode() * 31) + Boolean.hashCode(this.f395b)) * 31) + this.f396c.hashCode();
    }
}
