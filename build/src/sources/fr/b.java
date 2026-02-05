package fr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f23418a;

    /* renamed from: b  reason: collision with root package name */
    private final int f23419b;

    /* renamed from: c  reason: collision with root package name */
    private final int f23420c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f23421d;

    /* renamed from: e  reason: collision with root package name */
    private final int f23422e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f23419b = i10;
        this.f23420c = i11;
        this.f23421d = format;
        this.f23422e = i12;
    }

    @Override // fr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f23418a;
    }

    @Override // fr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = er.c.j(imageFile, er.c.f(imageFile, er.c.e(imageFile, this.f23419b, this.f23420c)), this.f23421d, this.f23422e);
        this.f23418a = true;
        return j10;
    }
}
