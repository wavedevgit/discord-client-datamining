package vn;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Button;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Title;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCombinedStepComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b3 implements vp.b {

    /* renamed from: d  reason: collision with root package name */
    private final List f51369d;

    /* renamed from: e  reason: collision with root package name */
    private final List f51370e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.UiStepStyle f51371i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51372o;

    /* renamed from: p  reason: collision with root package name */
    private final String f51373p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51374q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51375r;

    /* renamed from: s  reason: collision with root package name */
    public static final a f51368s = new a(null);
    @NotNull
    public static final Parcelable.Creator<b3> CREATOR = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b3 a(String str, String str2, String str3, StepStyles.DocumentStepStyle documentStepStyle) {
            String str4;
            TextBasedComponentStyle textBasedComponentStyle;
            String str5;
            ButtonCombinedStepComponentStyle buttonCombinedStepComponentStyle;
            String str6;
            ButtonCancelComponentStyle buttonSecondaryStyleValue;
            ButtonSubmitComponentStyle buttonPrimaryStyleValue;
            if (str == null) {
                str4 = "";
            } else {
                str4 = str;
            }
            Title.Attributes attributes = new Title.Attributes(str4, null, null, 6, null);
            ButtonCombinedStepComponentStyle buttonCombinedStepComponentStyle2 = null;
            if (documentStepStyle != null) {
                textBasedComponentStyle = documentStepStyle.getTitleStyleValue();
            } else {
                textBasedComponentStyle = null;
            }
            Title title = new Title("title", attributes, textBasedComponentStyle);
            if (str2 == null) {
                str5 = "";
            } else {
                str5 = str2;
            }
            BasicButtonAttributes basicButtonAttributes = new BasicButtonAttributes(str5, Button.ButtonType.PRIMARY, null, null, null, null, 60, null);
            if (documentStepStyle != null && (buttonPrimaryStyleValue = documentStepStyle.getButtonPrimaryStyleValue()) != null) {
                buttonCombinedStepComponentStyle = vn.b.b(buttonPrimaryStyleValue);
            } else {
                buttonCombinedStepComponentStyle = null;
            }
            CombinedStepButton combinedStepButton = new CombinedStepButton("take_photo", basicButtonAttributes, buttonCombinedStepComponentStyle);
            if (str3 == null) {
                str6 = "";
            } else {
                str6 = str3;
            }
            BasicButtonAttributes basicButtonAttributes2 = new BasicButtonAttributes(str6, Button.ButtonType.SECONDARY, null, null, null, null, 60, null);
            if (documentStepStyle != null && (buttonSecondaryStyleValue = documentStepStyle.getButtonSecondaryStyleValue()) != null) {
                buttonCombinedStepComponentStyle2 = vn.b.a(buttonSecondaryStyleValue);
            }
            List o10 = CollectionsKt.o(title, combinedStepButton, new CombinedStepButton("select_file", basicButtonAttributes2, buttonCombinedStepComponentStyle2));
            return new b3(com.withpersona.sdk2.inquiry.steps.ui.components.f.i(o10), o10, null, "select_file", null, "take_photo", null);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b3 createFromParcel(Parcel parcel) {
            ArrayList arrayList;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            if (parcel.readInt() == 0) {
                arrayList = null;
            } else {
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList2.add(parcel.readParcelable(b3.class.getClassLoader()));
                }
                arrayList = arrayList2;
            }
            int readInt2 = parcel.readInt();
            ArrayList arrayList3 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList3.add(parcel.readParcelable(b3.class.getClassLoader()));
            }
            return new b3(arrayList, arrayList3, (StepStyles.UiStepStyle) parcel.readParcelable(b3.class.getClassLoader()), parcel.readString(), parcel.readString(), parcel.readString(), parcel.readString());
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b3[] newArray(int i10) {
            return new b3[i10];
        }
    }

    public b3(List list, List componentConfigs, StepStyles.UiStepStyle uiStepStyle, String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(componentConfigs, "componentConfigs");
        this.f51369d = list;
        this.f51370e = componentConfigs;
        this.f51371i = uiStepStyle;
        this.f51372o = str;
        this.f51373p = str2;
        this.f51374q = str3;
        this.f51375r = str4;
    }

    @Override // vp.b
    public List C0() {
        return this.f51370e;
    }

    public final String a() {
        return this.f51375r;
    }

    public final String b() {
        return this.f51372o;
    }

    public final String c() {
        return this.f51373p;
    }

    public final String d() {
        return this.f51374q;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // vp.b
    public List getComponents() {
        return this.f51369d;
    }

    @Override // vp.b
    public StepStyles.UiStepStyle getStyles() {
        return this.f51371i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f51369d;
        if (list == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
        List<Parcelable> list2 = this.f51370e;
        dest.writeInt(list2.size());
        for (Parcelable parcelable2 : list2) {
            dest.writeParcelable(parcelable2, i10);
        }
        dest.writeParcelable(this.f51371i, i10);
        dest.writeString(this.f51372o);
        dest.writeString(this.f51373p);
        dest.writeString(this.f51374q);
        dest.writeString(this.f51375r);
    }
}
