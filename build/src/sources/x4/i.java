package x4;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f54350a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54351b;

    public i(Drawable drawable, boolean z10) {
        this.f54350a = drawable;
        this.f54351b = z10;
    }

    public final Drawable a() {
        return this.f54350a;
    }

    public final boolean b() {
        return this.f54351b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (Intrinsics.areEqual(this.f54350a, iVar.f54350a) && this.f54351b == iVar.f54351b) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54350a.hashCode() * 31) + Boolean.hashCode(this.f54351b);
    }
}
