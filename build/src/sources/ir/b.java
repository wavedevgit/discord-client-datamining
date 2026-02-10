package ir;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f29631a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29632b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29633c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f29634d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29635e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f29632b = i10;
        this.f29633c = i11;
        this.f29634d = format;
        this.f29635e = i12;
    }

    @Override // ir.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f29631a;
    }

    @Override // ir.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = hr.c.j(imageFile, hr.c.f(imageFile, hr.c.e(imageFile, this.f29632b, this.f29633c)), this.f29634d, this.f29635e);
        this.f29631a = true;
        return j10;
    }
}
