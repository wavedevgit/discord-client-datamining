package fq;

import android.graphics.Bitmap;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.HashMap;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h4 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f23481a;

        static {
            int[] iArr = new int[StyleElements.PositionType.values().length];
            try {
                iArr[StyleElements.PositionType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StyleElements.PositionType.CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StyleElements.PositionType.END.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f23481a = iArr;
        }
    }

    public static final ImageView b(f4 f4Var, m5 uiComponentHelper, final QRCode config) {
        String value;
        int i10;
        int i11;
        int i12;
        Intrinsics.checkNotNullParameter(f4Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        QRCode.Attributes attributes = config.getAttributes();
        if (attributes != null && (value = attributes.getValue()) != null) {
            int width = f4Var.getWidth();
            HashMap hashMap = new HashMap();
            hashMap.put(hk.f.MARGIN, 0);
            try {
                lk.b a10 = new bl.b().a(value, hk.a.QR_CODE, width, width, hashMap);
                Integer strokeColor = config.getStrokeColor();
                if (strokeColor != null) {
                    i10 = strokeColor.intValue();
                } else {
                    i10 = -16777216;
                }
                Integer fillColor = config.getFillColor();
                if (fillColor != null) {
                    i11 = fillColor.intValue();
                } else {
                    i11 = -1;
                }
                Bitmap createBitmap = Bitmap.createBitmap(width, width, Bitmap.Config.RGB_565);
                for (int i13 = 0; i13 < width; i13++) {
                    for (int i14 = 0; i14 < width; i14++) {
                        if (a10.e(i13, i14)) {
                            i12 = i10;
                        } else {
                            i12 = i11;
                        }
                        createBitmap.setPixel(i13, i14, i12);
                    }
                }
                Intrinsics.checkNotNullExpressionValue(createBitmap, "also(...)");
                final ImageView imageView = new ImageView(uiComponentHelper.a());
                imageView.setImageBitmap(createBitmap);
                uiComponentHelper.d(new Function0() { // from class: fq.g4
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit c10;
                        c10 = h4.c(QRCode.this, imageView);
                        return c10;
                    }
                });
                return imageView;
            } catch (hk.r unused) {
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(QRCode qRCode, ImageView imageView) {
        float f10;
        StyleElements.SizeSet margin = qRCode.getMargin();
        if (margin != null) {
            nq.d.c(imageView, margin);
        }
        ViewGroup.LayoutParams layoutParams = imageView.getLayoutParams();
        StyleElements.PositionType justification = qRCode.getJustification();
        if (justification != null && (layoutParams instanceof ConstraintLayout.LayoutParams)) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            ((ViewGroup.MarginLayoutParams) layoutParams2).width = -2;
            int i10 = a.f23481a[justification.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        f10 = 1.0f;
                    } else {
                        throw new qr.p();
                    }
                } else {
                    f10 = 0.5f;
                }
            } else {
                f10 = 0.0f;
            }
            layoutParams2.G = f10;
        }
        imageView.setLayoutParams(layoutParams);
        return Unit.f32056a;
    }
}
