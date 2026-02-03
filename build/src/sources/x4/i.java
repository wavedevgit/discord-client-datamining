package x4;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f53396a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f53397b;

    public i(Drawable drawable, boolean z10) {
        this.f53396a = drawable;
        this.f53397b = z10;
    }

    public final Drawable a() {
        return this.f53396a;
    }

    public final boolean b() {
        return this.f53397b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f53396a, iVar.f53396a) && this.f53397b == iVar.f53397b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53396a.hashCode() * 31) + Boolean.hashCode(this.f53397b);
    }
}
