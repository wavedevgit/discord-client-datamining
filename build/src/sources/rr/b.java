package rr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f48306a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48307b;

    /* renamed from: c  reason: collision with root package name */
    private final int f48308c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f48309d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48310e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f48307b = i10;
        this.f48308c = i11;
        this.f48309d = format;
        this.f48310e = i12;
    }

    @Override // rr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f48306a;
    }

    @Override // rr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = qr.c.j(imageFile, qr.c.f(imageFile, qr.c.e(imageFile, this.f48307b, this.f48308c)), this.f48309d, this.f48310e);
        this.f48306a = true;
        return j10;
    }
}
