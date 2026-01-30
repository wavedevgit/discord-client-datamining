package x4;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f53188a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f53189b;

    public i(Drawable drawable, boolean z10) {
        this.f53188a = drawable;
        this.f53189b = z10;
    }

    public final Drawable a() {
        return this.f53188a;
    }

    public final boolean b() {
        return this.f53189b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f53188a, iVar.f53188a) && this.f53189b == iVar.f53189b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53188a.hashCode() * 31) + Boolean.hashCode(this.f53189b);
    }
}
