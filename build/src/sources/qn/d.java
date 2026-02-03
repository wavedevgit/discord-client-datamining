package qn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
import nn.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final Rect a(c cVar, j0 imageToAnalyze) {
        int height;
        int width;
        double d10;
        Intrinsics.checkNotNullParameter(cVar, "<this>");
        Intrinsics.checkNotNullParameter(imageToAnalyze, "imageToAnalyze");
        int width2 = cVar.b().width();
        int height2 = cVar.b().height();
        if (width2 != 0 && height2 != 0) {
            if (imageToAnalyze.d() != 90 && imageToAnalyze.d() != 270) {
                height = imageToAnalyze.getWidth();
                width = imageToAnalyze.getHeight();
            } else {
                height = imageToAnalyze.getHeight();
                width = imageToAnalyze.getWidth();
            }
            double d11 = height;
            double d12 = width2;
            double d13 = d11 / d12;
            double d14 = width;
            double d15 = height2;
            double d16 = d14 / d15;
            double min = Math.min(d13, d16);
            double d17 = 0.0d;
            if (d13 > d16) {
                d10 = 0.0d;
                d17 = (d11 - (d12 * min)) / 2.0d;
            } else {
                d10 = (d14 - (d15 * min)) / 2.0d;
            }
            double d18 = d17 + ((cVar.a().left - cVar.b().left) * min);
            double d19 = d10 + ((cVar.a().top - cVar.b().top) * min);
            double width3 = cVar.a().width() * min;
            double height3 = cVar.a().height() * min;
            if (imageToAnalyze.d() != 90 && imageToAnalyze.d() != 270) {
                return new Rect((int) d18, (int) d19, (int) (d18 + width3), (int) (d19 + height3));
            }
            return new Rect((int) d19, (int) d18, (int) (d19 + height3), (int) (d18 + width3));
        }
        return null;
    }
}
