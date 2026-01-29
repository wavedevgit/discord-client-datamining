package x4;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f53172a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f53173b;

    public i(Drawable drawable, boolean z10) {
        this.f53172a = drawable;
        this.f53173b = z10;
    }

    public final Drawable a() {
        return this.f53172a;
    }

    public final boolean b() {
        return this.f53173b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f53172a, iVar.f53172a) && this.f53173b == iVar.f53173b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53172a.hashCode() * 31) + Boolean.hashCode(this.f53173b);
    }
}
