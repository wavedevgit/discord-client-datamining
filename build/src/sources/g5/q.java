package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f25106a;

    /* renamed from: b  reason: collision with root package name */
    private final h f25107b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f25108c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f25109d;

    /* renamed from: e  reason: collision with root package name */
    private final String f25110e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25111f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25112g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f25106a = drawable;
        this.f25107b = hVar;
        this.f25108c = hVar2;
        this.f25109d = bVar;
        this.f25110e = str;
        this.f25111f = z10;
        this.f25112g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f25106a;
    }

    @Override // g5.i
    public h b() {
        return this.f25107b;
    }

    public final x4.h c() {
        return this.f25108c;
    }

    public final boolean d() {
        return this.f25112g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f25108c == qVar.f25108c && Intrinsics.areEqual(this.f25109d, qVar.f25109d) && Intrinsics.areEqual(this.f25110e, qVar.f25110e) && this.f25111f == qVar.f25111f && this.f25112g == qVar.f25112g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f25108c.hashCode()) * 31;
        c.b bVar = this.f25109d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f25110e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f25111f)) * 31) + Boolean.hashCode(this.f25112g);
    }
}
