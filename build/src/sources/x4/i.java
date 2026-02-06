package x4;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f54477a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54478b;

    public i(Drawable drawable, boolean z10) {
        this.f54477a = drawable;
        this.f54478b = z10;
    }

    public final Drawable a() {
        return this.f54477a;
    }

    public final boolean b() {
        return this.f54478b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f54477a, iVar.f54477a) && this.f54478b == iVar.f54478b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54477a.hashCode() * 31) + Boolean.hashCode(this.f54478b);
    }
}
