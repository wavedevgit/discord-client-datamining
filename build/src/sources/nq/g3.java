package nq;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import dq.k5;
import dq.q5;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g3 implements Parcelable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b extends Parcelable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements b {
            @NotNull
            public static final Parcelable.Creator<a> CREATOR = new C0537a();

            /* renamed from: d  reason: collision with root package name */
            private final com.withpersona.sdk2.inquiry.steps.ui.components.a f41570d;

            /* renamed from: nq.g3$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0537a implements Parcelable.Creator {
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
                this.f41570d = createPersonaSheetComponent;
            }

            public final com.withpersona.sdk2.inquiry.steps.ui.components.a a() {
                return this.f41570d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof a) && Intrinsics.areEqual(this.f41570d, ((a) obj).f41570d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f41570d.hashCode();
            }

            public String toString() {
                com.withpersona.sdk2.inquiry.steps.ui.components.a aVar = this.f41570d;
                return "CreateReusablePersona(createPersonaSheetComponent=" + aVar + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f41570d, i10);
            }
        }

        /* renamed from: nq.g3$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0538b implements b {
            @NotNull
            public static final Parcelable.Creator<C0538b> CREATOR = new a();

            /* renamed from: d  reason: collision with root package name */
            private final q5 f41571d;

            /* renamed from: e  reason: collision with root package name */
            private final Map f41572e;

            /* renamed from: nq.g3$b$b$a */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0538b createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    q5 q5Var = (q5) parcel.readParcelable(C0538b.class.getClassLoader());
                    int readInt = parcel.readInt();
                    LinkedHashMap linkedHashMap = new LinkedHashMap(readInt);
                    for (int i10 = 0; i10 != readInt; i10++) {
                        linkedHashMap.put(parcel.readString(), parcel.readParcelable(C0538b.class.getClassLoader()));
                    }
                    return new C0538b(q5Var, linkedHashMap);
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0538b[] newArray(int i10) {
                    return new C0538b[i10];
                }
            }

            public C0538b(q5 verifyPersonaButtonComponent, Map componentParams) {
                Intrinsics.checkNotNullParameter(verifyPersonaButtonComponent, "verifyPersonaButtonComponent");
                Intrinsics.checkNotNullParameter(componentParams, "componentParams");
                this.f41571d = verifyPersonaButtonComponent;
                this.f41572e = componentParams;
            }

            public final Map a() {
                return this.f41572e;
            }

            public final q5 b() {
                return this.f41571d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0538b)) {
                    return false;
                }
                C0538b c0538b = (C0538b) obj;
                if (Intrinsics.areEqual(this.f41571d, c0538b.f41571d) && Intrinsics.areEqual(this.f41572e, c0538b.f41572e)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return (this.f41571d.hashCode() * 31) + this.f41572e.hashCode();
            }

            public String toString() {
                q5 q5Var = this.f41571d;
                Map map = this.f41572e;
                return "VerifyReusablePersona(verifyPersonaButtonComponent=" + q5Var + ", componentParams=" + map + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f41571d, i10);
                Map map = this.f41572e;
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
        private final List f41553d;

        /* renamed from: e  reason: collision with root package name */
        private final String f41554e;

        /* renamed from: i  reason: collision with root package name */
        private final List f41555i;

        /* renamed from: o  reason: collision with root package name */
        private final StepStyles.UiStepStyle f41556o;

        /* renamed from: p  reason: collision with root package name */
        private final String f41557p;

        /* renamed from: q  reason: collision with root package name */
        private final c f41558q;

        /* renamed from: r  reason: collision with root package name */
        private final C0534a f41559r;

        /* renamed from: s  reason: collision with root package name */
        private final b f41560s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f41561t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f41562u;

        /* renamed from: v  reason: collision with root package name */
        private final Map f41563v;

        /* renamed from: w  reason: collision with root package name */
        private final k5 f41564w;

        /* renamed from: x  reason: collision with root package name */
        private final String f41565x;

        /* renamed from: nq.g3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0534a implements Parcelable {
            @NotNull
            public static final Parcelable.Creator<C0534a> CREATOR = new C0535a();

            /* renamed from: d  reason: collision with root package name */
            private final dq.h f41566d;

            /* renamed from: e  reason: collision with root package name */
            private final int f41567e;

            /* renamed from: i  reason: collision with root package name */
            private final String f41568i;

            /* renamed from: nq.g3$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0535a implements Parcelable.Creator {
                @Override // android.os.Parcelable.Creator
                /* renamed from: a */
                public final C0534a createFromParcel(Parcel parcel) {
                    Intrinsics.checkNotNullParameter(parcel, "parcel");
                    return new C0534a((dq.h) parcel.readParcelable(C0534a.class.getClassLoader()), parcel.readInt(), parcel.readString());
                }

                @Override // android.os.Parcelable.Creator
                /* renamed from: b */
                public final C0534a[] newArray(int i10) {
                    return new C0534a[i10];
                }
            }

            public C0534a(dq.h component, int i10, String str) {
                Intrinsics.checkNotNullParameter(component, "component");
                this.f41566d = component;
                this.f41567e = i10;
                this.f41568i = str;
            }

            public final dq.h a() {
                return this.f41566d;
            }

            public final int b() {
                return this.f41567e;
            }

            public final String c() {
                return this.f41568i;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof C0534a)) {
                    return false;
                }
                C0534a c0534a = (C0534a) obj;
                if (Intrinsics.areEqual(this.f41566d, c0534a.f41566d) && this.f41567e == c0534a.f41567e && Intrinsics.areEqual(this.f41568i, c0534a.f41568i)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                int hashCode2 = ((this.f41566d.hashCode() * 31) + Integer.hashCode(this.f41567e)) * 31;
                String str = this.f41568i;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return hashCode2 + hashCode;
            }

            public String toString() {
                dq.h hVar = this.f41566d;
                int i10 = this.f41567e;
                String str = this.f41568i;
                return "AutoSubmit(component=" + hVar + ", countdown=" + i10 + ", countdownText=" + str + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f41566d, i10);
                dest.writeInt(this.f41567e);
                dest.writeString(this.f41568i);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b implements Parcelable.Creator {
            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public final a createFromParcel(Parcel parcel) {
                c createFromParcel;
                C0534a createFromParcel2;
                LinkedHashMap linkedHashMap;
                C0534a c0534a;
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
                    createFromParcel2 = C0534a.CREATOR.createFromParcel(parcel);
                }
                C0534a c0534a2 = createFromParcel2;
                b bVar2 = (b) parcel.readParcelable(a.class.getClassLoader());
                boolean z11 = true;
                if (parcel.readInt() != 0) {
                    linkedHashMap = null;
                    c0534a = c0534a2;
                    bVar = bVar2;
                    z10 = true;
                } else {
                    linkedHashMap = null;
                    c0534a = c0534a2;
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
                return new a(arrayList, readString, arrayList2, uiStepStyle, readString2, cVar, c0534a, bVar, z10, z11, linkedHashMap2, (k5) parcel.readParcelable(a.class.getClassLoader()), parcel.readString());
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
            public static final Parcelable.Creator<c> CREATOR = new C0536a();

            /* renamed from: d  reason: collision with root package name */
            private final GovernmentIdNfcScanComponent f41569d;

            /* renamed from: nq.g3$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0536a implements Parcelable.Creator {
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
                this.f41569d = component;
            }

            public final GovernmentIdNfcScanComponent a() {
                return this.f41569d;
            }

            @Override // android.os.Parcelable
            public final int describeContents() {
                return 0;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if ((obj instanceof c) && Intrinsics.areEqual(this.f41569d, ((c) obj).f41569d)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                return this.f41569d.hashCode();
            }

            public String toString() {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = this.f41569d;
                return "NfcScan(component=" + governmentIdNfcScanComponent + ")";
            }

            @Override // android.os.Parcelable
            public final void writeToParcel(Parcel dest, int i10) {
                Intrinsics.checkNotNullParameter(dest, "dest");
                dest.writeParcelable(this.f41569d, i10);
            }
        }

        public /* synthetic */ a(List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0534a c0534a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(list, str, (i10 & 4) != 0 ? CollectionsKt.l() : list2, uiStepStyle, (i10 & 16) != 0 ? null : str2, (i10 & 32) != 0 ? null : cVar, (i10 & 64) != 0 ? null : c0534a, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : bVar, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? false : z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? false : z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : map, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : k5Var, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? "0" : str3);
        }

        public static /* synthetic */ a b(a aVar, List list, String str, List list2, StepStyles.UiStepStyle uiStepStyle, String str2, c cVar, C0534a c0534a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String str3, int i10, Object obj) {
            String str4;
            List list3;
            StepStyles.UiStepStyle uiStepStyle2;
            String str5;
            c cVar2;
            C0534a c0534a2;
            b bVar2;
            boolean z12;
            boolean z13;
            Map map2;
            k5 k5Var2;
            String str6;
            if ((i10 & 1) != 0) {
                list = aVar.f41553d;
            }
            if ((i10 & 2) != 0) {
                str4 = aVar.f41554e;
            } else {
                str4 = str;
            }
            if ((i10 & 4) != 0) {
                list3 = aVar.f41555i;
            } else {
                list3 = list2;
            }
            if ((i10 & 8) != 0) {
                uiStepStyle2 = aVar.f41556o;
            } else {
                uiStepStyle2 = uiStepStyle;
            }
            if ((i10 & 16) != 0) {
                str5 = aVar.f41557p;
            } else {
                str5 = str2;
            }
            if ((i10 & 32) != 0) {
                cVar2 = aVar.f41558q;
            } else {
                cVar2 = cVar;
            }
            if ((i10 & 64) != 0) {
                c0534a2 = aVar.f41559r;
            } else {
                c0534a2 = c0534a;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                bVar2 = aVar.f41560s;
            } else {
                bVar2 = bVar;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                z12 = aVar.f41561t;
            } else {
                z12 = z10;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                z13 = aVar.f41562u;
            } else {
                z13 = z11;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                map2 = aVar.f41563v;
            } else {
                map2 = map;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                k5Var2 = aVar.f41564w;
            } else {
                k5Var2 = k5Var;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                str6 = aVar.f41565x;
            } else {
                str6 = str3;
            }
            return aVar.a(list, str4, list3, uiStepStyle2, str5, cVar2, c0534a2, bVar2, z12, z13, map2, k5Var2, str6);
        }

        public final a a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0534a c0534a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            return new a(components, stepName, componentErrors, uiStepStyle, str, cVar, c0534a, bVar, z10, z11, map, k5Var, requestPermissionKey);
        }

        public final C0534a c() {
            return this.f41559r;
        }

        public final List d() {
            return this.f41555i;
        }

        @Override // android.os.Parcelable
        public final int describeContents() {
            return 0;
        }

        public final Map e() {
            return this.f41563v;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f41553d, aVar.f41553d) && Intrinsics.areEqual(this.f41554e, aVar.f41554e) && Intrinsics.areEqual(this.f41555i, aVar.f41555i) && Intrinsics.areEqual(this.f41556o, aVar.f41556o) && Intrinsics.areEqual(this.f41557p, aVar.f41557p) && Intrinsics.areEqual(this.f41558q, aVar.f41558q) && Intrinsics.areEqual(this.f41559r, aVar.f41559r) && Intrinsics.areEqual(this.f41560s, aVar.f41560s) && this.f41561t == aVar.f41561t && this.f41562u == aVar.f41562u && Intrinsics.areEqual(this.f41563v, aVar.f41563v) && Intrinsics.areEqual(this.f41564w, aVar.f41564w) && Intrinsics.areEqual(this.f41565x, aVar.f41565x)) {
                return true;
            }
            return false;
        }

        public final String f() {
            return this.f41557p;
        }

        public final boolean g() {
            return this.f41561t;
        }

        public final List getComponents() {
            return this.f41553d;
        }

        public final StepStyles.UiStepStyle getStyles() {
            return this.f41556o;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2;
            int hashCode3;
            int hashCode4;
            int hashCode5;
            int hashCode6;
            int hashCode7 = ((((this.f41553d.hashCode() * 31) + this.f41554e.hashCode()) * 31) + this.f41555i.hashCode()) * 31;
            StepStyles.UiStepStyle uiStepStyle = this.f41556o;
            int i10 = 0;
            if (uiStepStyle == null) {
                hashCode = 0;
            } else {
                hashCode = uiStepStyle.hashCode();
            }
            int i11 = (hashCode7 + hashCode) * 31;
            String str = this.f41557p;
            if (str == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str.hashCode();
            }
            int i12 = (i11 + hashCode2) * 31;
            c cVar = this.f41558q;
            if (cVar == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = cVar.hashCode();
            }
            int i13 = (i12 + hashCode3) * 31;
            C0534a c0534a = this.f41559r;
            if (c0534a == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = c0534a.hashCode();
            }
            int i14 = (i13 + hashCode4) * 31;
            b bVar = this.f41560s;
            if (bVar == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = bVar.hashCode();
            }
            int hashCode8 = (((((i14 + hashCode5) * 31) + Boolean.hashCode(this.f41561t)) * 31) + Boolean.hashCode(this.f41562u)) * 31;
            Map map = this.f41563v;
            if (map == null) {
                hashCode6 = 0;
            } else {
                hashCode6 = map.hashCode();
            }
            int i15 = (hashCode8 + hashCode6) * 31;
            k5 k5Var = this.f41564w;
            if (k5Var != null) {
                i10 = k5Var.hashCode();
            }
            return ((i15 + i10) * 31) + this.f41565x.hashCode();
        }

        public final c i() {
            return this.f41558q;
        }

        public final b j() {
            return this.f41560s;
        }

        public final String l() {
            return this.f41565x;
        }

        public final String n() {
            return this.f41554e;
        }

        public final k5 o() {
            return this.f41564w;
        }

        public final boolean p() {
            return this.f41562u;
        }

        public String toString() {
            List list = this.f41553d;
            String str = this.f41554e;
            List list2 = this.f41555i;
            StepStyles.UiStepStyle uiStepStyle = this.f41556o;
            String str2 = this.f41557p;
            c cVar = this.f41558q;
            C0534a c0534a = this.f41559r;
            b bVar = this.f41560s;
            boolean z10 = this.f41561t;
            boolean z11 = this.f41562u;
            Map map = this.f41563v;
            k5 k5Var = this.f41564w;
            String str3 = this.f41565x;
            return "Displaying(components=" + list + ", stepName=" + str + ", componentErrors=" + list2 + ", styles=" + uiStepStyle + ", error=" + str2 + ", nfcScan=" + cVar + ", autoSubmit=" + c0534a + ", pendingAction=" + bVar + ", hasRequestedGpsPermissions=" + z10 + ", isRequestingGpsPermissions=" + z11 + ", componentParams=" + map + ", triggeringComponent=" + k5Var + ", requestPermissionKey=" + str3 + ")";
        }

        @Override // android.os.Parcelable
        public final void writeToParcel(Parcel dest, int i10) {
            Intrinsics.checkNotNullParameter(dest, "dest");
            List<Parcelable> list = this.f41553d;
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
            dest.writeString(this.f41554e);
            List<Parcelable> list2 = this.f41555i;
            dest.writeInt(list2.size());
            for (Parcelable parcelable2 : list2) {
                dest.writeParcelable(parcelable2, i10);
            }
            dest.writeParcelable(this.f41556o, i10);
            dest.writeString(this.f41557p);
            c cVar = this.f41558q;
            if (cVar == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                cVar.writeToParcel(dest, i10);
            }
            C0534a c0534a = this.f41559r;
            if (c0534a == null) {
                dest.writeInt(0);
            } else {
                dest.writeInt(1);
                c0534a.writeToParcel(dest, i10);
            }
            dest.writeParcelable(this.f41560s, i10);
            dest.writeInt(this.f41561t ? 1 : 0);
            dest.writeInt(this.f41562u ? 1 : 0);
            Map map = this.f41563v;
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
            dest.writeParcelable(this.f41564w, i10);
            dest.writeString(this.f41565x);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(List components, String stepName, List componentErrors, StepStyles.UiStepStyle uiStepStyle, String str, c cVar, C0534a c0534a, b bVar, boolean z10, boolean z11, Map map, k5 k5Var, String requestPermissionKey) {
            super(null);
            Intrinsics.checkNotNullParameter(components, "components");
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(componentErrors, "componentErrors");
            Intrinsics.checkNotNullParameter(requestPermissionKey, "requestPermissionKey");
            this.f41553d = components;
            this.f41554e = stepName;
            this.f41555i = componentErrors;
            this.f41556o = uiStepStyle;
            this.f41557p = str;
            this.f41558q = cVar;
            this.f41559r = c0534a;
            this.f41560s = bVar;
            this.f41561t = z10;
            this.f41562u = z11;
            this.f41563v = map;
            this.f41564w = k5Var;
            this.f41565x = requestPermissionKey;
        }
    }
}
