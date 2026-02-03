package yp;

import android.os.Parcel;
import android.os.Parcelable;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements k5, l5, e0 {
    @NotNull
    public static final Parcelable.Creator<f0> CREATOR = new a();

    /* renamed from: d  reason: collision with root package name */
    private final String f54916d;

    /* renamed from: e  reason: collision with root package name */
    private final List f54917e;

    /* renamed from: i  reason: collision with root package name */
    private final JsonLogicBoolean f54918i;

    /* renamed from: o  reason: collision with root package name */
    private final List f54919o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable.Creator {
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final f0 createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            int readInt = parcel.readInt();
            ArrayList arrayList = new ArrayList(readInt);
            for (int i10 = 0; i10 != readInt; i10++) {
                arrayList.add(parcel.readParcelable(f0.class.getClassLoader()));
            }
            return new f0(readString, arrayList, (JsonLogicBoolean) parcel.readParcelable(f0.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final f0[] newArray(int i10) {
            return new f0[i10];
        }
    }

    public f0(String name, List children, JsonLogicBoolean jsonLogicBoolean) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        this.f54916d = name;
        this.f54917e = children;
        this.f54918i = jsonLogicBoolean;
        this.f54919o = new ArrayList();
    }

    public static /* synthetic */ f0 b(f0 f0Var, String str, List list, JsonLogicBoolean jsonLogicBoolean, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = f0Var.f54916d;
        }
        if ((i10 & 2) != 0) {
            list = f0Var.f54917e;
        }
        if ((i10 & 4) != 0) {
            jsonLogicBoolean = f0Var.f54918i;
        }
        return f0Var.a(str, list, jsonLogicBoolean);
    }

    @Override // yp.l5
    public l5 O0(List newChildren) {
        Intrinsics.checkNotNullParameter(newChildren, "newChildren");
        return b(this, null, newChildren, null, 5, null);
    }

    public final f0 a(String name, List children, JsonLogicBoolean jsonLogicBoolean) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(children, "children");
        return new f0(name, children, jsonLogicBoolean);
    }

    @Override // yp.e0
    public List d() {
        return this.f54919o;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f0)) {
            return false;
        }
        f0 f0Var = (f0) obj;
        if (Intrinsics.areEqual(this.f54916d, f0Var.f54916d) && Intrinsics.areEqual(this.f54917e, f0Var.f54917e) && Intrinsics.areEqual(this.f54918i, f0Var.f54918i)) {
            return true;
        }
        return false;
    }

    @Override // yp.l5
    public List getChildren() {
        return this.f54917e;
    }

    @Override // yp.e0
    public JsonLogicBoolean getHidden() {
        return this.f54918i;
    }

    @Override // yp.k5
    public String getName() {
        return this.f54916d;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = ((this.f54916d.hashCode() * 31) + this.f54917e.hashCode()) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f54918i;
        if (jsonLogicBoolean == null) {
            hashCode = 0;
        } else {
            hashCode = jsonLogicBoolean.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        String str = this.f54916d;
        List list = this.f54917e;
        JsonLogicBoolean jsonLogicBoolean = this.f54918i;
        return "HorizontalStackComponent(name=" + str + ", children=" + list + ", hidden=" + jsonLogicBoolean + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f54916d);
        List<Parcelable> list = this.f54917e;
        dest.writeInt(list.size());
        for (Parcelable parcelable : list) {
            dest.writeParcelable(parcelable, i10);
        }
        dest.writeParcelable(this.f54918i, i10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public f0(com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack r5) {
        /*
            r4 = this;
            java.lang.String r0 = "config"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = r5.getName()
            java.util.List r1 = r5.getChildren()
            if (r1 == 0) goto L30
            java.lang.Iterable r1 = (java.lang.Iterable) r1
            java.util.ArrayList r2 = new java.util.ArrayList
            r2.<init>()
            java.util.Iterator r1 = r1.iterator()
        L1a:
            boolean r3 = r1.hasNext()
            if (r3 == 0) goto L34
            java.lang.Object r3 = r1.next()
            com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig r3 = (com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig) r3
            yp.k5 r3 = com.withpersona.sdk2.inquiry.steps.ui.components.f.l(r3)
            if (r3 == 0) goto L1a
            r2.add(r3)
            goto L1a
        L30:
            java.util.List r2 = kotlin.collections.CollectionsKt.l()
        L34:
            com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack$Attributes r5 = r5.getAttributes()
            if (r5 == 0) goto L3f
            com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean r5 = r5.getHidden()
            goto L40
        L3f:
            r5 = 0
        L40:
            r4.<init>(r0, r2, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: yp.f0.<init>(com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack):void");
    }
}
