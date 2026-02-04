package yp;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Parcelable {
    @NotNull
    public static final Parcelable.Creator<g> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final List f55240d;

    /* renamed from: e  reason: collision with root package name */
    private final List f55241e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.UiStepStyle f55242i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final g createFromParcel(Parcel parcel) {
            ArrayList arrayList;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            if (parcel.readInt() == 0) {
                arrayList = null;
            } else {
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                for (int i10 = 0; i10 != readInt; i10++) {
                    arrayList2.add(parcel.readParcelable(g.class.getClassLoader()));
                }
                arrayList = arrayList2;
            }
            int readInt2 = parcel.readInt();
            ArrayList arrayList3 = new ArrayList(readInt2);
            for (int i11 = 0; i11 != readInt2; i11++) {
                arrayList3.add(parcel.readParcelable(g.class.getClassLoader()));
            }
            return new g(arrayList, arrayList3, (StepStyles.UiStepStyle) parcel.readParcelable(g.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final g[] newArray(int i10) {
            return new g[i10];
        }
    }

    public g(List list, List componentConfigs, StepStyles.UiStepStyle uiStepStyle) {
        Intrinsics.checkNotNullParameter(componentConfigs, "componentConfigs");
        this.f55240d = list;
        this.f55241e = componentConfigs;
        this.f55242i = uiStepStyle;
    }

    public static /* synthetic */ g c(g gVar, List list, List list2, StepStyles.UiStepStyle uiStepStyle, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = gVar.f55240d;
        }
        if ((i10 & 2) != 0) {
            list2 = gVar.f55241e;
        }
        if ((i10 & 4) != 0) {
            uiStepStyle = gVar.f55242i;
        }
        return gVar.b(list, list2, uiStepStyle);
    }

    public final List C0() {
        return this.f55241e;
    }

    public final Drawable a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        StepStyles.UiStepStyle uiStepStyle = this.f55242i;
        if (uiStepStyle != null) {
            return hq.c.a(uiStepStyle, context);
        }
        return null;
    }

    public final g b(List list, List componentConfigs, StepStyles.UiStepStyle uiStepStyle) {
        Intrinsics.checkNotNullParameter(componentConfigs, "componentConfigs");
        return new g(list, componentConfigs, uiStepStyle);
    }

    public final Integer d() {
        StepStyles.StepBackgroundColorStyle backgroundColor;
        StyleElements.SimpleElementColor base;
        StyleElements.SimpleElementColorValue base2;
        StepStyles.UiStepStyle uiStepStyle = this.f55242i;
        if (uiStepStyle != null && (backgroundColor = uiStepStyle.getBackgroundColor()) != null && (base = backgroundColor.getBase()) != null && (base2 = base.getBase()) != null) {
            return base2.getValue();
        }
        return null;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final Integer e() {
        AttributeStyles.HeaderButtonColorStyle headerButtonColor;
        StyleElements.SimpleElementColor headerButton;
        StyleElements.SimpleElementColorValue base;
        StepStyles.UiStepStyle uiStepStyle = this.f55242i;
        if (uiStepStyle != null && (headerButtonColor = uiStepStyle.getHeaderButtonColor()) != null && (headerButton = headerButtonColor.getHeaderButton()) != null && (base = headerButton.getBase()) != null) {
            return base.getValue();
        }
        return null;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f55240d, gVar.f55240d) && Intrinsics.areEqual(this.f55241e, gVar.f55241e) && Intrinsics.areEqual(this.f55242i, gVar.f55242i)) {
            return true;
        }
        return false;
    }

    public final StyleElements.PositionType f() {
        StepStyles.UiStepStyle uiStepStyle = this.f55242i;
        if (uiStepStyle != null) {
            return uiStepStyle.getPageLevelVerticalAlignment();
        }
        return null;
    }

    public final List getComponents() {
        return this.f55240d;
    }

    public final StepStyles.UiStepStyle getStyles() {
        return this.f55242i;
    }

    public int hashCode() {
        int hashCode;
        List list = this.f55240d;
        int i10 = 0;
        if (list == null) {
            hashCode = 0;
        } else {
            hashCode = list.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + this.f55241e.hashCode()) * 31;
        StepStyles.UiStepStyle uiStepStyle = this.f55242i;
        if (uiStepStyle != null) {
            i10 = uiStepStyle.hashCode();
        }
        return hashCode2 + i10;
    }

    public String toString() {
        List list = this.f55240d;
        List list2 = this.f55241e;
        StepStyles.UiStepStyle uiStepStyle = this.f55242i;
        return "UiComponentScreen(components=" + list + ", componentConfigs=" + list2 + ", styles=" + uiStepStyle + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        List<Parcelable> list = this.f55240d;
        if (list == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
        List<Parcelable> list2 = this.f55241e;
        dest.writeInt(list2.size());
        for (Parcelable parcelable2 : list2) {
            dest.writeParcelable(parcelable2, i10);
        }
        dest.writeParcelable(this.f55242i, i10);
    }
}
