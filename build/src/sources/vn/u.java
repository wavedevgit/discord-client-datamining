package vn;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Button;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Text;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Title;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCombinedStepComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.LocalImageComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements vp.b {

    /* renamed from: d  reason: collision with root package name */
    private final List f51666d;

    /* renamed from: e  reason: collision with root package name */
    private final List f51667e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.UiStepStyle f51668i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51669o;

    /* renamed from: p  reason: collision with root package name */
    private final String f51670p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51671q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51672r;

    /* renamed from: s  reason: collision with root package name */
    public static final a f51665s = new a(null);
    @NotNull
    public static final Parcelable.Creator<u> CREATOR = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final u a(String str, String str2, String str3, String str4, StepStyles.DocumentStepStyle documentStepStyle) {
            String str5;
            TextBasedComponentStyle textBasedComponentStyle;
            String str6;
            TextBasedComponentStyle textBasedComponentStyle2;
            StyleElements.SimpleElementColor simpleElementColor;
            StyleElements.SimpleElementColor simpleElementColor2;
            String str7;
            ButtonCombinedStepComponentStyle buttonCombinedStepComponentStyle;
            String str8;
            ButtonCombinedStepComponentStyle buttonCombinedStepComponentStyle2;
            ButtonCancelComponentStyle buttonSecondaryStyleValue;
            ButtonSubmitComponentStyle buttonPrimaryStyleValue;
            StepStyles.DocumentStepFillColor fillColor;
            StepStyles.DocumentStepStrokeColor strokeColor;
            Double valueOf = Double.valueOf(0.0d);
            Double valueOf2 = Double.valueOf(24.0d);
            if (str == null) {
                str5 = "";
            } else {
                str5 = str;
            }
            Title.Attributes attributes = new Title.Attributes(str5, null, null, 6, null);
            if (documentStepStyle != null) {
                textBasedComponentStyle = documentStepStyle.getTitleStyleValue();
            } else {
                textBasedComponentStyle = null;
            }
            Title title = new Title("title", attributes, textBasedComponentStyle);
            if (str2 == null) {
                str6 = "";
            } else {
                str6 = str2;
            }
            Text.Attributes attributes2 = new Text.Attributes(str6, null, null, 6, null);
            if (documentStepStyle != null) {
                textBasedComponentStyle2 = documentStepStyle.getTextStyleValue();
            } else {
                textBasedComponentStyle2 = null;
            }
            Text text = new Text("body", attributes2, textBasedComponentStyle2);
            LocalImage.Attributes attributes3 = new LocalImage.Attributes(LocalImage.Image.DOCUMENT_START_HERO, null);
            if (documentStepStyle != null && (strokeColor = documentStepStyle.getStrokeColor()) != null) {
                simpleElementColor = strokeColor.getBase();
            } else {
                simpleElementColor = null;
            }
            AttributeStyles.LocalImageStrokeColorStyle localImageStrokeColorStyle = new AttributeStyles.LocalImageStrokeColorStyle(simpleElementColor);
            if (documentStepStyle != null && (fillColor = documentStepStyle.getFillColor()) != null) {
                simpleElementColor2 = fillColor.getBase();
            } else {
                simpleElementColor2 = null;
            }
            LocalImage localImage = new LocalImage("hero_image", attributes3, new LocalImageComponentStyle(localImageStrokeColorStyle, new AttributeStyles.LocalImageFillColorStyle(simpleElementColor2, null), null, null, null, new AttributeStyles.LocalImageMarginStyle(new StyleElements.MeasurementSet(new StyleElements.SizeSet(new StyleElements.DPSize(valueOf2), new StyleElements.DPSize(valueOf2), new StyleElements.DPSize(valueOf), new StyleElements.DPSize(valueOf)))), 28, null));
            if (str4 == null) {
                str7 = "";
            } else {
                str7 = str4;
            }
            BasicButtonAttributes basicButtonAttributes = new BasicButtonAttributes(str7, Button.ButtonType.PRIMARY, null, null, null, null, 60, null);
            if (documentStepStyle != null && (buttonPrimaryStyleValue = documentStepStyle.getButtonPrimaryStyleValue()) != null) {
                buttonCombinedStepComponentStyle = vn.b.b(buttonPrimaryStyleValue);
            } else {
                buttonCombinedStepComponentStyle = null;
            }
            CombinedStepButton combinedStepButton = new CombinedStepButton("camera_button", basicButtonAttributes, buttonCombinedStepComponentStyle);
            if (str3 == null) {
                str8 = "";
            } else {
                str8 = str3;
            }
            BasicButtonAttributes basicButtonAttributes2 = new BasicButtonAttributes(str8, Button.ButtonType.SECONDARY, null, null, null, null, 60, null);
            if (documentStepStyle != null && (buttonSecondaryStyleValue = documentStepStyle.getButtonSecondaryStyleValue()) != null) {
                buttonCombinedStepComponentStyle2 = vn.b.a(buttonSecondaryStyleValue);
            } else {
                buttonCombinedStepComponentStyle2 = null;
            }
            List o10 = CollectionsKt.o(title, text, localImage, combinedStepButton, new CombinedStepButton("upload_button", basicButtonAttributes2, buttonCombinedStepComponentStyle2));
            return new u(com.withpersona.sdk2.inquiry.steps.ui.components.f.i(o10), o10, null, "upload_button", null, "camera_button", null);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final u createFromParcel(Parcel parcel) {
            ArrayList arrayList;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            if (parcel.readInt() == 0) {
                arrayList = null;
            } else {
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList2.add(parcel.readParcelable(u.class.getClassLoader()));
                }
                arrayList = arrayList2;
            }
            int readInt2 = parcel.readInt();
            ArrayList arrayList3 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList3.add(parcel.readParcelable(u.class.getClassLoader()));
            }
            return new u(arrayList, arrayList3, (StepStyles.UiStepStyle) parcel.readParcelable(u.class.getClassLoader()), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final u[] newArray(int i10) {
            return new u[i10];
        }
    }

    public u(List list, List componentConfigs, StepStyles.UiStepStyle uiStepStyle, String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(componentConfigs, "componentConfigs");
        this.f51666d = list;
        this.f51667e = componentConfigs;
        this.f51668i = uiStepStyle;
        this.f51669o = str;
        this.f51670p = str2;
        this.f51671q = str3;
        this.f51672r = str4;
    }

    @Override // vp.b
    public List C0() {
        return this.f51667e;
    }

    public final String a() {
        return this.f51672r;
    }

    public final String b() {
        return this.f51669o;
    }

    public final String c() {
        return this.f51670p;
    }

    public final String d() {
        return this.f51671q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // vp.b
    public List getComponents() {
        return this.f51666d;
    }

    @Override // vp.b
    public StepStyles.UiStepStyle getStyles() {
        return this.f51668i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f51666d;
        if (list == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
        List<Parcelable> list2 = this.f51667e;
        dest.writeInt(list2.size());
        for (Parcelable parcelable2 : list2) {
            dest.writeParcelable(parcelable2, i10);
        }
        dest.writeParcelable(this.f51668i, i10);
        dest.writeString(this.f51669o);
        dest.writeString(this.f51670p);
        dest.writeString(this.f51671q);
        dest.writeString(this.f51672r);
    }
}
