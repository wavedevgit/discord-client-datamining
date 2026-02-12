package wp;

import android.graphics.Bitmap;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import fo.y0;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import wp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f53226a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f53227b;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f52971d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f52972e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f52973i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f53226a = iArr;
            int[] iArr2 = new int[NextStep.Selfie.SelfiePose.values().length];
            try {
                iArr2[NextStep.Selfie.SelfiePose.CENTER.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[NextStep.Selfie.SelfiePose.LEFT.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[NextStep.Selfie.SelfiePose.RIGHT.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f53227b = iArr2;
        }
    }

    public static final String a(a1.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        int i10 = a.f53226a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return ViewProps.RIGHT;
                }
                throw new as.p();
            }
            return ViewProps.LEFT;
        }
        return "center";
    }

    public static final Object b(fo.y0 y0Var, gq.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(y0Var, "<this>");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        try {
            long currentTimeMillis = System.currentTimeMillis();
            File c10 = sdkFilesManager.c("jpg");
            Bitmap a10 = y0Var.a();
            FileOutputStream fileOutputStream = new FileOutputStream(c10);
            a10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            ls.c.a(fileOutputStream, null);
            Result.a aVar = Result.f31985e;
            String absolutePath = c10.getAbsolutePath();
            Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
            return Result.b(new a1.c(absolutePath, a1.a.f52966e, d(y0Var), currentTimeMillis));
        } catch (IOException e10) {
            Result.a aVar2 = Result.f31985e;
            return Result.b(kotlin.c.a(e10));
        }
    }

    public static final a1.b c(NextStep.Selfie.SelfiePose selfiePose) {
        Intrinsics.checkNotNullParameter(selfiePose, "<this>");
        int i10 = a.f53227b[selfiePose.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return a1.b.f52973i;
                }
                throw new as.p();
            }
            return a1.b.f52972e;
        }
        return a1.b.f52971d;
    }

    public static final a1.b d(fo.y0 y0Var) {
        Intrinsics.checkNotNullParameter(y0Var, "<this>");
        if (y0Var instanceof y0.a) {
            return a1.b.f52971d;
        }
        if (y0Var instanceof y0.b) {
            return a1.b.f52972e;
        }
        if (y0Var instanceof y0.c) {
            return a1.b.f52973i;
        }
        throw new as.p();
    }
}
