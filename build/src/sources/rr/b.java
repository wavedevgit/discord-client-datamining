package rr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f47737a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47738b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47739c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f47740d;

    /* renamed from: e  reason: collision with root package name */
    private final int f47741e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f47738b = i10;
        this.f47739c = i11;
        this.f47740d = format;
        this.f47741e = i12;
    }

    @Override // rr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f47737a;
    }

    @Override // rr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = qr.c.j(imageFile, qr.c.f(imageFile, qr.c.e(imageFile, this.f47738b, this.f47739c)), this.f47740d, this.f47741e);
        this.f47737a = true;
        return j10;
    }
}
