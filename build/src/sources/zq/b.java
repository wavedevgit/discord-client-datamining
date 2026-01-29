package zq;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f56056a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56057b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56058c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f56059d;

    /* renamed from: e  reason: collision with root package name */
    private final int f56060e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f56057b = i10;
        this.f56058c = i11;
        this.f56059d = format;
        this.f56060e = i12;
    }

    @Override // zq.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f56056a;
    }

    @Override // zq.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = yq.c.j(imageFile, yq.c.f(imageFile, yq.c.e(imageFile, this.f56057b, this.f56058c)), this.f56059d, this.f56060e);
        this.f56056a = true;
        return j10;
    }
}
