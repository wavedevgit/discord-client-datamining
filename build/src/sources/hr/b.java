package hr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f26443a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26444b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26445c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f26446d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26447e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f26444b = i10;
        this.f26445c = i11;
        this.f26446d = format;
        this.f26447e = i12;
    }

    @Override // hr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f26443a;
    }

    @Override // hr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = gr.c.j(imageFile, gr.c.f(imageFile, gr.c.e(imageFile, this.f26444b, this.f26445c)), this.f26446d, this.f26447e);
        this.f26443a = true;
        return j10;
    }
}
