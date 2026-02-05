package kp;

import android.graphics.Bitmap;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import kp.a1;
import sn.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f35386a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f35387b;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f35131d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f35132e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f35133i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f35386a = iArr;
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
            f35387b = iArr2;
        }
    }

    public static final String a(a1.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        int i10 = a.f35386a[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return ViewProps.RIGHT;
                }
                throw new or.p();
            }
            return ViewProps.LEFT;
        }
        return "center";
    }

    public static final Object b(sn.y0 y0Var, up.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(y0Var, "<this>");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        try {
            long currentTimeMillis = System.currentTimeMillis();
            File c10 = sdkFilesManager.c("jpg");
            Bitmap a10 = y0Var.a();
            FileOutputStream fileOutputStream = new FileOutputStream(c10);
            a10.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            zr.c.a(fileOutputStream, null);
            Result.a aVar = Result.f31985e;
            String absolutePath = c10.getAbsolutePath();
            Intrinsics.checkNotNullExpressionValue(absolutePath, "getAbsolutePath(...)");
            return Result.b(new a1.c(absolutePath, a1.a.f35126e, d(y0Var), currentTimeMillis));
        } catch (IOException e10) {
            Result.a aVar2 = Result.f31985e;
            return Result.b(kotlin.c.a(e10));
        }
    }

    public static final a1.b c(NextStep.Selfie.SelfiePose selfiePose) {
        Intrinsics.checkNotNullParameter(selfiePose, "<this>");
        int i10 = a.f35387b[selfiePose.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return a1.b.f35133i;
                }
                throw new or.p();
            }
            return a1.b.f35132e;
        }
        return a1.b.f35131d;
    }

    public static final a1.b d(sn.y0 y0Var) {
        Intrinsics.checkNotNullParameter(y0Var, "<this>");
        if (y0Var instanceof y0.a) {
            return a1.b.f35131d;
        }
        if (y0Var instanceof y0.b) {
            return a1.b.f35132e;
        }
        if (y0Var instanceof y0.c) {
            return a1.b.f35133i;
        }
        throw new or.p();
    }
}
