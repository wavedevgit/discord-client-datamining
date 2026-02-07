package hr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f26491a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26492b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26493c;

    /* renamed from: d  reason: collision with root package name */
    private final Bitmap.CompressFormat f26494d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26495e;

    public b(int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f26492b = i10;
        this.f26493c = i11;
        this.f26494d = format;
        this.f26495e = i12;
    }

    @Override // hr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return this.f26491a;
    }

    @Override // hr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        File j10 = gr.c.j(imageFile, gr.c.f(imageFile, gr.c.e(imageFile, this.f26492b, this.f26493c)), this.f26494d, this.f26495e);
        this.f26491a = true;
        return j10;
    }
}
