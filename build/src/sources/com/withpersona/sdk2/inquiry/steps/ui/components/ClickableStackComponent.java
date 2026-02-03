package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import aq.e0;
import aq.k5;
import aq.l5;
import aq.v;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.i;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = true)
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\u0019\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0087\b\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u00032\u00020\u0004BE\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\f\u0012\b\b\u0002\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\u0010\u0010\u0011B\u0011\b\u0016\u0012\u0006\u0010\u0013\u001a\u00020\u0012¢\u0006\u0004\b\u0010\u0010\u0014J\u001d\u0010\u0016\u001a\u00020\u00022\f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00010\u0007H\u0016¢\u0006\u0004\b\u0016\u0010\u0017J\u001d\u0010\u001d\u001a\u00020\u001c2\u0006\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u001b\u001a\u00020\u001a¢\u0006\u0004\b\u001d\u0010\u001eJ\r\u0010\u001f\u001a\u00020\u001a¢\u0006\u0004\b\u001f\u0010 JX\u0010!\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00010\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f2\b\b\u0002\u0010\u000f\u001a\u00020\u000eHÆ\u0001¢\u0006\u0004\b!\u0010\"J\u0010\u0010#\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b#\u0010$J\u0010\u0010%\u001a\u00020\u001aHÖ\u0001¢\u0006\u0004\b%\u0010 J\u001a\u0010(\u001a\u00020\u000e2\b\u0010'\u001a\u0004\u0018\u00010&HÖ\u0003¢\u0006\u0004\b(\u0010)R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b*\u0010+\u001a\u0004\b,\u0010$R \u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00010\u00078\u0016X\u0096\u0004¢\u0006\f\n\u0004\b-\u0010.\u001a\u0004\b/\u00100R\u001c\u0010\n\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b1\u00102\u001a\u0004\b3\u00104R\u001c\u0010\u000b\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b5\u00102\u001a\u0004\b6\u00104R\u0019\u0010\r\u001a\u0004\u0018\u00010\f8\u0006¢\u0006\f\n\u0004\b7\u00108\u001a\u0004\b9\u0010:R\"\u0010\u000f\u001a\u00020\u000e8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b;\u0010<\u001a\u0004\b-\u0010=\"\u0004\b>\u0010?R&\u0010E\u001a\b\u0012\u0004\u0012\u00020A0@8\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\bB\u0010.\u0012\u0004\bC\u0010D\u001a\u0004\b*\u00100¨\u0006F"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent;", "Laq/k5;", "Laq/l5;", "Laq/v;", "Laq/e0;", "", StackTraceHelper.NAME_KEY, "", "children", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;", "styles", "", "isActive", "<init>", "(Ljava/lang/String;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;Z)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack;)V", "newChildren", "R0", "(Ljava/util/List;)Laq/l5;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "a", "(Ljava/lang/String;Ljava/util/List;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;Z)Lcom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Ljava/util/List;", "getChildren", "()Ljava/util/List;", "i", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "p", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;", "c", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;", "q", "Z", "()Z", "f", "(Z)V", "", "Liq/a;", "r", "getAssociatedViews$annotations", "()V", "associatedViews", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nClickableStackComponent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClickableStackComponent.kt\ncom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,91:1\n1611#2,9:92\n1863#2:101\n1864#2:103\n1620#2:104\n1#3:102\n*S KotlinDebug\n*F\n+ 1 ClickableStackComponent.kt\ncom/withpersona/sdk2/inquiry/steps/ui/components/ClickableStackComponent\n*L\n34#1:92,9\n34#1:101\n34#1:103\n34#1:104\n34#1:102\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ClickableStackComponent implements k5, l5, v, e0 {
    @NotNull
    public static final Parcelable.Creator<ClickableStackComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19173d;

    /* renamed from: e  reason: collision with root package name */
    private final List f19174e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19175i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19176o;

    /* renamed from: p  reason: collision with root package name */
    private final ClickableStack.ClickableStackComponentStyle f19177p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f19178q;

    /* renamed from: r  reason: collision with root package name */
    private final List f19179r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final ClickableStackComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(ClickableStackComponent.class.getClassLoader()));
            }
            return new ClickableStackComponent(readString, arrayList, (JsonLogicBoolean) parcel.readParcelable(ClickableStackComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(ClickableStackComponent.class.getClassLoader()), (ClickableStack.ClickableStackComponentStyle) parcel.readParcelable(ClickableStackComponent.class.getClassLoader()), parcel.readInt() != 0);
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final ClickableStackComponent[] newArray(int i10) {
            return new ClickableStackComponent[i10];
        }
    }

    public ClickableStackComponent(String name, List children, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        this.f19173d = name;
        this.f19174e = children;
        this.f19175i = jsonLogicBoolean;
        this.f19176o = jsonLogicBoolean2;
        this.f19177p = clickableStackComponentStyle;
        this.f19178q = z10;
        this.f19179r = new ArrayList();
    }

    public static /* synthetic */ ClickableStackComponent b(ClickableStackComponent clickableStackComponent, String str, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = clickableStackComponent.f19173d;
        }
        if ((i10 & 2) != 0) {
            list = clickableStackComponent.f19174e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = clickableStackComponent.f19175i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = clickableStackComponent.f19176o;
        }
        if ((i10 & 16) != 0) {
            clickableStackComponentStyle = clickableStackComponent.f19177p;
        }
        if ((i10 & 32) != 0) {
            z10 = clickableStackComponent.f19178q;
        }
        ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle2 = clickableStackComponentStyle;
        boolean z11 = z10;
        return clickableStackComponent.a(str, list, jsonLogicBoolean, jsonLogicBoolean2, clickableStackComponentStyle2, z11);
    }

    @Override // aq.l5
    public l5 R0(List newChildren) {
        Intrinsics.checkNotNullParameter(newChildren, "newChildren");
        return b(this, null, newChildren, null, null, null, false, 61, null);
    }

    public final ClickableStackComponent a(String name, List children, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        return new ClickableStackComponent(name, children, jsonLogicBoolean, jsonLogicBoolean2, clickableStackComponentStyle, z10);
    }

    public final ClickableStack.ClickableStackComponentStyle c() {
        return this.f19177p;
    }

    @Override // aq.e0
    public List d() {
        return this.f19179r;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final boolean e() {
        return this.f19178q;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClickableStackComponent) {
            ClickableStackComponent clickableStackComponent = (ClickableStackComponent) obj;
            return Intrinsics.areEqual(this.f19173d, clickableStackComponent.f19173d) && Intrinsics.areEqual(this.f19174e, clickableStackComponent.f19174e) && Intrinsics.areEqual(this.f19175i, clickableStackComponent.f19175i) && Intrinsics.areEqual(this.f19176o, clickableStackComponent.f19176o) && Intrinsics.areEqual(this.f19177p, clickableStackComponent.f19177p) && this.f19178q == clickableStackComponent.f19178q;
        }
        return false;
    }

    public final void f(boolean z10) {
        this.f19178q = z10;
    }

    @Override // aq.l5
    public List getChildren() {
        return this.f19174e;
    }

    @Override // aq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19176o;
    }

    @Override // aq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19175i;
    }

    @Override // aq.k5
    public String getName() {
        return this.f19173d;
    }

    public int hashCode() {
        int hashCode = ((this.f19173d.hashCode() * 31) + this.f19174e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19175i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19176o;
        int hashCode3 = (hashCode2 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31;
        ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle = this.f19177p;
        return ((hashCode3 + (clickableStackComponentStyle != null ? clickableStackComponentStyle.hashCode() : 0)) * 31) + Boolean.hashCode(this.f19178q);
    }

    public String toString() {
        String str = this.f19173d;
        List list = this.f19174e;
        JsonLogicBoolean jsonLogicBoolean = this.f19175i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19176o;
        ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle = this.f19177p;
        boolean z10 = this.f19178q;
        return "ClickableStackComponent(name=" + str + ", children=" + list + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", styles=" + clickableStackComponentStyle + ", isActive=" + z10 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19173d);
        List<Parcelable> list = this.f19174e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeParcelable(this.f19175i, i10);
        dest.writeParcelable(this.f19176o, i10);
        dest.writeParcelable(this.f19177p, i10);
        dest.writeInt(this.f19178q ? 1 : 0);
    }

    public /* synthetic */ ClickableStackComponent(String str, List list, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, list, jsonLogicBoolean, jsonLogicBoolean2, clickableStackComponentStyle, (i10 & 32) != 0 ? false : z10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public ClickableStackComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack r11) {
        /*
            r10 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            java.lang.String r2 = r11.getName()
            java.util.List r0 = r11.getChildren()
            if (r0 == 0) goto L32
            java.lang.Iterable r0 = (java.lang.Iterable) r0
            java.util.ArrayList r1 = new java.util.ArrayList
            r1.<init>()
            java.util.Iterator r0 = r0.iterator()
        L1a:
            boolean r3 = r0.hasNext()
            if (r3 == 0) goto L30
            java.lang.Object r3 = r0.next()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig r3 = (com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig) r3
            aq.k5 r3 = com.withpersona.sdk2.inquiry.steps.ui.components.f.l(r3)
            if (r3 == 0) goto L1a
            r1.add(r3)
            goto L1a
        L30:
            r3 = r1
            goto L37
        L32:
            java.util.List r1 = kotlin.collections.CollectionsKt.l()
            goto L30
        L37:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack$Attributes r0 = r11.getAttributes()
            r1 = 0
            if (r0 == 0) goto L44
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r0 = r0.getHidden()
            r4 = r0
            goto L45
        L44:
            r4 = r1
        L45:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack$Attributes r0 = r11.getAttributes()
            if (r0 == 0) goto L4f
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r1 = r0.getDisabled()
        L4f:
            r5 = r1
            com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack$ClickableStackComponentStyle r6 = r11.getStyles()
            r8 = 32
            r9 = 0
            r7 = 0
            r1 = r10
            r1.<init>(r2, r3, r4, r5, r6, r7, r8, r9)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.ClickableStackComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack):void");
    }
}
