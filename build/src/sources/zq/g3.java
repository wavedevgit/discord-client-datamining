package zq;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import pq.k5;
import pq.q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g3 implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0811a();

            /* renamed from: d  reason: collision with root package name */
            private final com.withpersona.sdk2.inquiry.steps.ui.components.a f57292d;

            /* renamed from: zq.g3$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0811a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new a((com.withpersona.sdk2.inquiry.steps.ui.components.a) parcel.readParcelable(a.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final a[] newArray(int i10) {
                    return new a[i10];
                }
            }

            public a(com.withpersona.sdk2.inquiry.steps.ui.components.a createPersonaSheetComponent) {
                Intrinsics.checkNotNullParameter(createPersonaSheetComponent, "createPersonaSheetComponent");
                this.f57292d = createPersonaSheetComponent;
            }

            public final com.withpersona.sdk2.inquiry.steps.ui.components.a a() {
                return this.f57292d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f57292d, ((a) obj).f57292d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f57292d.hashCode();
            }

            public String toString() {
                com.withpersona.sdk2.inquiry.steps.ui.components.a aVar = this.f57292d;
                return "CreateReusablePersona(createPersonaSheetComponent=" + aVar + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f57292d, i10);
            }
        }

        /* renamed from: zq.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0812b implements b {
            @NotNull
            public static final Parcelable.Creator<C0812b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final q5 f57293d;

            /* renamed from: e  reason: collision with root package name */
            private final Map f57294e;

            /* renamed from: zq.g3$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0812b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    q5 q5Var = (q5) parcel.readParcelable(C0812b.class.getClassLoader());
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0812b.class.getClassLoader()));
                    }
                    return new C0812b(q5Var, linkedHashMap);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0812b[] newArray(int i10) {
                    return new C0812b[i10];
                }
            }

            public C0812b(q5 verifyPersonaButtonComponent, Map componentParams) {
                Intrinsics.checkNotNullParameter(verifyPersonaButtonComponent, "verifyPersonaButtonComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                this.f57293d = verifyPersonaButtonComponent;
                this.f57294e = componentParams;
            }

            public final Map a() {
                return this.f57294e;
            }

            public final q5 b() {
                return this.f57293d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0812b)) {
                    return false;
                }
                C0812b c0812b = (C0812b) obj;
                if (Intrinsics.areEqual(this.f57293d, c0812b.f57293d) && Intrinsics.areEqual(this.f57294e, c0812b.f57294e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f57293d.hashCode() * 31) + this.f57294e.hashCode();
            }

            public String toString() {
                q5 q5Var = this.f57293d;
                Map map = this.f57294e;
                return "VerifyReusablePersona(verifyPersonaButtonComponent=" + q5Var + ", componentParams=" + map + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f57293d, i10);
                Map map = this.f57294e;
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
        }
    }

    public /* synthetic */ g3(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private g3() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends g3 {
        @NotNull
        public static final Parcelable.Creator<a> CREATOR = new b();

        /* renamed from: d  reason: collision with root package name */
        private final List f57275d;

        /* renamed from: e  reason: collision with root package name */
        private final String f57276e;

        /* renamed from: i  reason: collision with root package name */
        private final List f57277i;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.UiStepStyle f57278o;

        /* renamed from: p  reason: collision with root package name */
        private final String f57279p;

        /* renamed from: q  reason: collision with root package name */
        private final c f57280q;

        /* renamed from: r  reason: collision with root package name */
        private final C0808a f57281r;

        /* renamed from: s  reason: collision with root package name */
        private final b f57282s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f57283t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f57284u;

        /* renamed from: v  reason: collision with root package name */
        private final Map f57285v;

        /* renamed from: w  reason: collision with root package name */
        private final k5 f57286w;

        /* renamed from: x  reason: collision with root package name */
        private final String f57287x;

        /* renamed from: zq.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0808a implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<C0808a> CREATOR = new C0809a();

            /* renamed from: d  reason: collision with root package name */
            private final pq.h f57288d;

            /* renamed from: e  reason: collision with root package name */
            private final int f57289e;

            /* renamed from: i  reason: collision with root package name */
            private final String f57290i;

            /* renamed from: zq.g3$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0809a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0808a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new C0808a((pq.h) parcel.readParcelable(C0808a.class.getClassLoader()), parcel.readInt(), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0808a[] newArray(int i10) {
                    return new C0808a[i10];
                }
            }

            public C0808a(pq.h component, int i10, String str) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f57288d = component;
                this.f57289e = i10;
                this.f57290i = str;
            }

            public final pq.h a() {
                return this.f57288d;
            }

            public final int b() {
                return this.f57289e;
            }

            public final String c() {
                return this.f57290i;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0808a)) {
                    return false;
                }
                C0808a c0808a = (C0808a) obj;
                if (Intrinsics.areEqual(this.f57288d, c0808a.f57288d) && this.f57289e == c0808a.f57289e && Intrinsics.areEqual(this.f57290i, c0808a.f57290i)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f57288d.hashCode() * 31) + Integer.hashCode(this.f57289e)) * 31;
                String str = this.f57290i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            public String toString() {
                pq.h hVar = this.f57288d;
                int i10 = this.f57289e;
                String str = this.f57290i;
                return "AutoSubmit(component=" + hVar + ", countdown=" + i10 + ", countdownText=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f57288d, i10);
                dest.writeInt(this.f57289e);
                dest.writeString(this.f57290i);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                c createFromParcel;
                C0808a createFromParcel2;
                LinkedHashMap linkedHashMap;
                C0808a c0808a;
                b bVar;
                boolean z10;
                LinkedHashMap linkedHashMap2;
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                int readInt = parcel.readInt();
                ArrayList arrayList = new ArrayList(readInt);
                int i10 = 0;
                for (int i11 = 0; i11 != readInt; i11++) {
                    arrayList.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                String readString = parcel.readString();
                int readInt2 = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt2);
                for (int i12 = 0; i12 != readInt2; i12++) {
                    arrayList2.add(parcel.readParcelable(a.class.getClassLoader()));
                }
                StepStyles.UiStepStyle uiStepStyle = (StepStyles.UiStepStyle) parcel.readParcelable(a.class.getClassLoader());
                String readString2 = parcel.readString();
                if (parcel.readInt() == 0) {
                    createFromParcel = null;
                } else {
                    createFromParcel = c.CREATOR.createFromParcel(parcel);
                }
                c cVar = createFromParcel;
                if (parcel.readInt() == 0) {
                    createFromParcel2 = null;
                } else {
                    createFromParcel2 = C0808a.CREATOR.createFromParcel(parcel);
                }
                C0808a c0808a2 = createFromParcel2;
                b bVar2 = (b) parcel.readParcelable(a.class.getClassLoader());
                boolean z11 = true;
                if (parcel.readInt() != 0) {
                    linkedHashMap = null;
                    c0808a = c0808a2;
                    bVar = bVar2;
                    z10 = true;
                } else {
                    linkedHashMap = null;
                    c0808a = c0808a2;
                    bVar = bVar2;
                    z10 = false;
                }
                if (parcel.readInt() == 0) {
                    z11 = false;
                }
                if (parcel.readInt() == 0) {
                    linkedHashMap2 = linkedHashMap;
                } else {
                    int readInt3 = parcel.readInt();
                    linkedHashMap2 = new LinkedHashMap(readInt3);
                    while (i10 != readInt3) {
                        linkedHashMap2.put(parcel.readString(), parcel.readParcelable(a.class.getClassLoader()));
                        i10++;
                        uiStepStyle = uiStepStyle;
                    }
                }
                return new a(arrayList, readString, arrayList2, uiStepStyle, readString2, cVar, c0808a, bVar, z10, z11, linkedHashMap2, (k5) parcel.readParcelable(a.class.getClassLoader()), parcel.readString());
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public final a[] newArray(int i10) {
                return new a[i10];
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<c> CREATOR = new C0810a();

            /* renamed from: d  reason: collision with root package name */
            private final GovernmentIdNfcScanComponent f57291d;

            /* renamed from: zq.g3$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0810a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final c createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new c((GovernmentIdNfcScanComponent) parcel.readParcelable(c.class.getClassLoader()));
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final c[] newArray(int i10) {
                    return new c[i10];
                }
            }

            public c(GovernmentIdNfcScanComponent component) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f57291d = component;
            }

            public final GovernmentIdNfcScanComponent a() {
                return this.f57291d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f57291d, ((c) obj).f57291d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f57291d.hashCode();
            }

            public String toString() {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = this.f57291d;
                return "NfcScan(component=" + governmentIdNfcScanComponent + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f57291d, i10);
            }
        }

        public /* synthetic */ a(List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0808a c0808a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, str, (i10 & 4) != 0 ? CollectionsKt.l() : list2, uiStepStyle, (i10 & 16) != 0 ? null : str2, (i10 & 32) != 0 ? null : cVar, (i10 & 64) != 0 ? null : c0808a, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bVar, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : map, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : k5Var, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? "0" : str3);
        }

        public static /* synthetic */ a b(a aVar, List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0808a c0808a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, Object obj) {
            String str4;
            List list3;
            StepStyles.UiStepStyle uiStepStyle2;
            String str5;
            c cVar2;
            C0808a c0808a2;
            b bVar2;
            boolean z12;
            boolean z13;
            Map map2;
            k5 k5Var2;
            String str6;
            if ((i10 & 1) != 0) {
                list = aVar.f57275d;
            }
            if ((i10 & 2) != 0) {
                str4 = aVar.f57276e;
            } else {
                str4 = str;
            }
            if ((i10 & 4) != 0) {
                list3 = aVar.f57277i;
            } else {
                list3 = list2;
            }
            if ((i10 & 8) != 0) {
                uiStepStyle2 = aVar.f57278o;
            } else {
                uiStepStyle2 = uiStepStyle;
            }
            if ((i10 & 16) != 0) {
                str5 = aVar.f57279p;
            } else {
                str5 = str2;
            }
            if ((i10 & 32) != 0) {
                cVar2 = aVar.f57280q;
            } else {
                cVar2 = cVar;
            }
            if ((i10 & 64) != 0) {
                c0808a2 = aVar.f57281r;
            } else {
                c0808a2 = c0808a;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar2 = aVar.f57282s;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = aVar.f57283t;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z13 = aVar.f57284u;
            } else {
                z13 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                map2 = aVar.f57285v;
            } else {
                map2 = map;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                k5Var2 = aVar.f57286w;
            } else {
                k5Var2 = k5Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                str6 = aVar.f57287x;
            } else {
                str6 = str3;
            }
            return aVar.a(list, str4, list3, uiStepStyle2, str5, cVar2, c0808a2, bVar2, z12, z13, map2, k5Var2, str6);
        }

        public final a a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0808a c0808a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            return new a(components, stepName, componentErrors, uiStepStyle, str, cVar, c0808a, bVar, z10, z11, map, k5Var, requestPermissionKey);
        }

        public final C0808a c() {
            return this.f57281r;
        }

        public final List d() {
            return this.f57277i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Map e() {
            return this.f57285v;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f57275d, aVar.f57275d) && Intrinsics.areEqual(this.f57276e, aVar.f57276e) && Intrinsics.areEqual(this.f57277i, aVar.f57277i) && Intrinsics.areEqual(this.f57278o, aVar.f57278o) && Intrinsics.areEqual(this.f57279p, aVar.f57279p) && Intrinsics.areEqual(this.f57280q, aVar.f57280q) && Intrinsics.areEqual(this.f57281r, aVar.f57281r) && Intrinsics.areEqual(this.f57282s, aVar.f57282s) && this.f57283t == aVar.f57283t && this.f57284u == aVar.f57284u && Intrinsics.areEqual(this.f57285v, aVar.f57285v) && Intrinsics.areEqual(this.f57286w, aVar.f57286w) && Intrinsics.areEqual(this.f57287x, aVar.f57287x)) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f57279p;
        }

        public final boolean g() {
            return this.f57283t;
        }

        public final List getComponents() {
            return this.f57275d;
        }

        public final StepStyles.UiStepStyle getStyles() {
            return this.f57278o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7 = ((((this.f57275d.hashCode() * 31) + this.f57276e.hashCode()) * 31) + this.f57277i.hashCode()) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f57278o;
            int i10 = 0;
            if (uiStepStyle == null) {
                hashCode = 0;
            } else {
                hashCode = uiStepStyle.hashCode();
            }
            int i11 = (hashCode7 + hashCode) * 31;
            String str = this.f57279p;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            c cVar = this.f57280q;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            C0808a c0808a = this.f57281r;
            if (c0808a == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = c0808a.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            b bVar = this.f57282s;
            if (bVar == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = bVar.hashCode();
            }
            int hashCode8 = (((((i14 + hashCode5) * 31) + Boolean.hashCode(this.f57283t)) * 31) + Boolean.hashCode(this.f57284u)) * 31;
            Map map = this.f57285v;
            if (map == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = map.hashCode();
            }
            int i15 = (hashCode8 + hashCode6) * 31;
            k5 k5Var = this.f57286w;
            if (k5Var != null) {
                i10 = k5Var.hashCode();
            }
            return ((i15 + i10) * 31) + this.f57287x.hashCode();
        }

        public final c i() {
            return this.f57280q;
        }

        public final b j() {
            return this.f57282s;
        }

        public final String k() {
            return this.f57287x;
        }

        public final String l() {
            return this.f57276e;
        }

        public final k5 o() {
            return this.f57286w;
        }

        public final boolean p() {
            return this.f57284u;
        }

        public String toString() {
            List list = this.f57275d;
            String str = this.f57276e;
            List list2 = this.f57277i;
            StepStyles.UiStepStyle uiStepStyle = this.f57278o;
            String str2 = this.f57279p;
            c cVar = this.f57280q;
            C0808a c0808a = this.f57281r;
            b bVar = this.f57282s;
            boolean z10 = this.f57283t;
            boolean z11 = this.f57284u;
            Map map = this.f57285v;
            k5 k5Var = this.f57286w;
            String str3 = this.f57287x;
            return "Displaying(components=" + list + ", stepName=" + str + ", componentErrors=" + list2 + ", styles=" + uiStepStyle + ", error=" + str2 + ", nfcScan=" + cVar + ", autoSubmit=" + c0808a + ", pendingAction=" + bVar + ", hasRequestedGpsPermissions=" + z10 + ", isRequestingGpsPermissions=" + z11 + ", componentParams=" + map + ", triggeringComponent=" + k5Var + ", requestPermissionKey=" + str3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f57275d;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f57276e);
            List<Parcelable> list2 = this.f57277i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f57278o, i10);
            dest.writeString(this.f57279p);
            c cVar = this.f57280q;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            C0808a c0808a = this.f57281r;
            if (c0808a == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c0808a.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f57282s, i10);
            dest.writeInt(this.f57283t ? 1 : 0);
            dest.writeInt(this.f57284u ? 1 : 0);
            Map map = this.f57285v;
            if (map == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                dest.writeInt(map.size());
                for (Map.Entry entry : map.entrySet()) {
                    dest.writeString((String) entry.getKey());
                    dest.writeParcelable((Parcelable) entry.getValue(), i10);
                }
            }
            dest.writeParcelable(this.f57286w, i10);
            dest.writeString(this.f57287x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0808a c0808a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            super(null);
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            this.f57275d = components;
            this.f57276e = stepName;
            this.f57277i = componentErrors;
            this.f57278o = uiStepStyle;
            this.f57279p = str;
            this.f57280q = cVar;
            this.f57281r = c0808a;
            this.f57282s = bVar;
            this.f57283t = z10;
            this.f57284u = z11;
            this.f57285v = map;
            this.f57286w = k5Var;
            this.f57287x = requestPermissionKey;
        }
    }
}
