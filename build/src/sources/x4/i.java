package x4;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f54349a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54350b;

    public i(Drawable drawable, boolean z10) {
        this.f54349a = drawable;
        this.f54350b = z10;
    }

    public final Drawable a() {
        return this.f54349a;
    }

    public final boolean b() {
        return this.f54350b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f54349a, iVar.f54349a) && this.f54350b == iVar.f54350b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54349a.hashCode() * 31) + Boolean.hashCode(this.f54350b);
    }
}
