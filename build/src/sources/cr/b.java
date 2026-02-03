package cr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f19807a;

    /* renamed from: b  reason: collision with root package name */
    private final int f19808b;

    /* renamed from: c  reason: collision with root package name */
    private final int f19809c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f19810d;

    /* renamed from: e  reason: collision with root package name */
    private final int f19811e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f19808b = i10;
        this.f19809c = i11;
        this.f19810d = format;
        this.f19811e = i12;
    }

    @Override // cr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f19807a;
    }

    @Override // cr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = br.c.j(imageFile, br.c.f(imageFile, br.c.e(imageFile, this.f19808b, this.f19809c)), this.f19810d, this.f19811e);
        this.f19807a = true;
        return j10;
    }
}
