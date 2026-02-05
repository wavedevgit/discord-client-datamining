package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.g;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import dq.b5;
import dq.e0;
import dq.k5;
import dq.v;
import eq.l;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\"\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u000e\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\t\b\u0087\b\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u00032\b\u0012\u0004\u0012\u00020\u00000\u0004B1\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00050\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\f\u0010\rB\u0011\b\u0016\u0012\u0006\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\f\u0010\u0010J\u001d\u0010\u0012\u001a\u00020\u00002\f\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00050\u0007H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u001d\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0017\u001a\u00020\u0016¢\u0006\u0004\b\u0019\u0010\u001aJ\r\u0010\u001b\u001a\u00020\u0016¢\u0006\u0004\b\u001b\u0010\u001cJB\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0006\u001a\u00020\u00052\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00050\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\u001d\u0010\u001eJ\u0010\u0010\u001f\u001a\u00020\u0005HÖ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0010\u0010!\u001a\u00020\u0016HÖ\u0001¢\u0006\u0004\b!\u0010\u001cJ\u001a\u0010%\u001a\u00020$2\b\u0010#\u001a\u0004\u0018\u00010\"HÖ\u0003¢\u0006\u0004\b%\u0010&R\u001a\u0010\u0006\u001a\u00020\u00058\u0016X\u0096\u0004¢\u0006\f\n\u0004\b'\u0010(\u001a\u0004\b)\u0010 R\u001d\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00050\u00078\u0006¢\u0006\f\n\u0004\b*\u0010+\u001a\u0004\b,\u0010-R\u001c\u0010\n\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0012\u0010.\u001a\u0004\b/\u00100R\u001c\u0010\u000b\u001a\u0004\u0018\u00010\t8\u0016X\u0096\u0004¢\u0006\f\n\u0004\b1\u0010.\u001a\u0004\b2\u00100R&\u0010:\u001a\b\u0012\u0004\u0012\u000204038\u0016X\u0096\u0004¢\u0006\u0012\n\u0004\b5\u00106\u0012\u0004\b8\u00109\u001a\u0004\b'\u00107R(\u0010C\u001a\u00020;8\u0016@\u0016X\u0097\u000e¢\u0006\u0018\n\u0004\b<\u0010=\u0012\u0004\bB\u00109\u001a\u0004\b>\u0010?\"\u0004\b@\u0010A¨\u0006D"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCheckboxGroupComponent;", "Ldq/k5;", "Ldq/v;", "Ldq/e0;", "Ldq/b5;", "", StackTraceHelper.NAME_KEY, "", "value", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", ViewProps.HIDDEN, "disabled", "<init>", "(Ljava/lang/String;Ljava/util/Set;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckboxGroup;", "config", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckboxGroup;)V", "newValue", "i", "(Ljava/util/Set;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCheckboxGroupComponent;", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "describeContents", "()I", "c", "(Ljava/lang/String;Ljava/util/Set;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)Lcom/withpersona/sdk2/inquiry/steps/ui/components/InputCheckboxGroupComponent;", "toString", "()Ljava/lang/String;", "hashCode", "", "other", "", "equals", "(Ljava/lang/Object;)Z", "d", "Ljava/lang/String;", "getName", "e", "Ljava/util/Set;", "f", "()Ljava/util/Set;", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "getHidden", "()Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "o", "getDisabled", "", "Llq/a;", "p", "Ljava/util/List;", "()Ljava/util/List;", "getAssociatedViews$annotations", "()V", "associatedViews", "Leq/l;", "q", "Leq/l;", "b", "()Leq/l;", "g", "(Leq/l;)V", "getStringSetController$annotations", "stringSetController", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputCheckboxGroupComponent implements k5, v, e0, b5 {
    @NotNull
    public static final Parcelable.Creator<InputCheckboxGroupComponent> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f19635d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f19636e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f19637i;

    /* renamed from: o  reason: collision with root package name */
    private final JsonLogicBoolean f19638o;

    /* renamed from: p  reason: collision with root package name */
    private final List f19639p;

    /* renamed from: q  reason: collision with root package name */
    private l f19640q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final InputCheckboxGroupComponent createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            LinkedHashSet linkedHashSet = new LinkedHashSet(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                linkedHashSet.add(parcel.readString());
            }
            return new InputCheckboxGroupComponent(readString, linkedHashSet, (JsonLogicBoolean) parcel.readParcelable(InputCheckboxGroupComponent.class.getClassLoader()), (JsonLogicBoolean) parcel.readParcelable(InputCheckboxGroupComponent.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final InputCheckboxGroupComponent[] newArray(int i10) {
            return new InputCheckboxGroupComponent[i10];
        }
    }

    public InputCheckboxGroupComponent(String name, Set value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f19635d = name;
        this.f19636e = value;
        this.f19637i = jsonLogicBoolean;
        this.f19638o = jsonLogicBoolean2;
        this.f19639p = new ArrayList();
        this.f19640q = new l(value);
    }

    public static /* synthetic */ InputCheckboxGroupComponent e(InputCheckboxGroupComponent inputCheckboxGroupComponent, String str, Set set, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = inputCheckboxGroupComponent.f19635d;
        }
        if ((i10 & 2) != 0) {
            set = inputCheckboxGroupComponent.f19636e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = inputCheckboxGroupComponent.f19637i;
        }
        if ((i10 & 8) != 0) {
            jsonLogicBoolean2 = inputCheckboxGroupComponent.f19638o;
        }
        return inputCheckboxGroupComponent.c(str, set, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @g(ignore = true)
    public static /* synthetic */ void getStringSetController$annotations() {
    }

    @Override // dq.b5
    public l b() {
        return this.f19640q;
    }

    public final InputCheckboxGroupComponent c(String name, Set value, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        return new InputCheckboxGroupComponent(name, value, jsonLogicBoolean, jsonLogicBoolean2);
    }

    @Override // dq.e0
    public List d() {
        return this.f19639p;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InputCheckboxGroupComponent) {
            InputCheckboxGroupComponent inputCheckboxGroupComponent = (InputCheckboxGroupComponent) obj;
            return Intrinsics.areEqual(this.f19635d, inputCheckboxGroupComponent.f19635d) && Intrinsics.areEqual(this.f19636e, inputCheckboxGroupComponent.f19636e) && Intrinsics.areEqual(this.f19637i, inputCheckboxGroupComponent.f19637i) && Intrinsics.areEqual(this.f19638o, inputCheckboxGroupComponent.f19638o);
        }
        return false;
    }

    public final Set f() {
        return this.f19636e;
    }

    public void g(l lVar) {
        Intrinsics.checkNotNullParameter(lVar, "<set-?>");
        this.f19640q = lVar;
    }

    @Override // dq.v
    public JsonLogicBoolean getDisabled() {
        return this.f19638o;
    }

    @Override // dq.e0
    public JsonLogicBoolean getHidden() {
        return this.f19637i;
    }

    @Override // dq.k5
    public String getName() {
        return this.f19635d;
    }

    public int hashCode() {
        int hashCode = ((this.f19635d.hashCode() * 31) + this.f19636e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f19637i;
        int hashCode2 = (hashCode + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19638o;
        return hashCode2 + (jsonLogicBoolean2 != null ? jsonLogicBoolean2.hashCode() : 0);
    }

    @Override // dq.b5
    /* renamed from: i */
    public InputCheckboxGroupComponent a(Set newValue) {
        Intrinsics.checkNotNullParameter(newValue, "newValue");
        InputCheckboxGroupComponent e10 = e(this, null, newValue, null, null, 13, null);
        e10.g(b());
        return e10;
    }

    public String toString() {
        String str = this.f19635d;
        Set set = this.f19636e;
        JsonLogicBoolean jsonLogicBoolean = this.f19637i;
        JsonLogicBoolean jsonLogicBoolean2 = this.f19638o;
        return "InputCheckboxGroupComponent(name=" + str + ", value=" + set + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f19635d);
        Set<String> set = this.f19636e;
        dest.writeInt(set.size());
        for (String str : set) {
            dest.writeString(str);
        }
        dest.writeParcelable(this.f19637i, i10);
        dest.writeParcelable(this.f19638o, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public InputCheckboxGroupComponent(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup r5) {
        /*
            r4 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = r5.getName()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup$Attributes r1 = r5.getAttributes()
            if (r1 == 0) goto L1d
            java.util.List r1 = r1.getPrefill()
            if (r1 == 0) goto L1d
            java.lang.Iterable r1 = (java.lang.Iterable) r1
            java.util.Set r1 = kotlin.collections.CollectionsKt.l1(r1)
            if (r1 != 0) goto L21
        L1d:
            java.util.Set r1 = kotlin.collections.x0.d()
        L21:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup$Attributes r2 = r5.getAttributes()
            r3 = 0
            if (r2 == 0) goto L2d
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r2 = r2.getHidden()
            goto L2e
        L2d:
            r2 = r3
        L2e:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup$Attributes r5 = r5.getAttributes()
            if (r5 == 0) goto L38
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r3 = r5.getDisabled()
        L38:
            r4.<init>(r0, r1, r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxGroupComponent.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup):void");
    }
}
