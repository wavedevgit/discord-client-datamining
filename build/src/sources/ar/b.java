package ar;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f6043a;

    /* renamed from: b  reason: collision with root package name */
    private final int f6044b;

    /* renamed from: c  reason: collision with root package name */
    private final int f6045c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f6046d;

    /* renamed from: e  reason: collision with root package name */
    private final int f6047e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f6044b = i10;
        this.f6045c = i11;
        this.f6046d = format;
        this.f6047e = i12;
    }

    @Override // ar.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f6043a;
    }

    @Override // ar.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = zq.c.j(imageFile, zq.c.f(imageFile, zq.c.e(imageFile, this.f6044b, this.f6045c)), this.f6046d, this.f6047e);
        this.f6043a = true;
        return j10;
    }
}
