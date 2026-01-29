package com.withpersona.sdk2.inquiry.steps.ui.components;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.t;
import vm.w;
import xp.b4;
import xp.c2;
import xp.e0;
import xp.k5;
import xp.v;
import yp.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements k5, v, e0 {
    private List A;
    private Map B;
    private final c2 C;
    private t D;

    /* renamed from: d  reason: collision with root package name */
    private final String f20697d;

    /* renamed from: e  reason: collision with root package name */
    private final String f20698e;

    /* renamed from: i  reason: collision with root package name */
    private final String f20699i;

    /* renamed from: o  reason: collision with root package name */
    private final String f20700o;

    /* renamed from: p  reason: collision with root package name */
    private final JsonLogicBoolean f20701p;

    /* renamed from: q  reason: collision with root package name */
    private final JsonLogicBoolean f20702q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f20703r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f20704s;

    /* renamed from: t  reason: collision with root package name */
    private final Boolean f20705t;

    /* renamed from: u  reason: collision with root package name */
    private final Boolean f20706u;

    /* renamed from: v  reason: collision with root package name */
    private final List f20707v;

    /* renamed from: w  reason: collision with root package name */
    private final InputSelectComponentStyle f20708w;

    /* renamed from: x  reason: collision with root package name */
    private final List f20709x;

    /* renamed from: y  reason: collision with root package name */
    private k f20710y;

    /* renamed from: z  reason: collision with root package name */
    private k f20711z;
    public static final C0259b E = new C0259b(null);
    @NotNull
    public static final Parcelable.Creator<b> CREATOR = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c2 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Set f20713e;

        a(Set set) {
            this.f20713e = set;
        }

        @Override // xp.c2
        public List b() {
            Set<c> set = this.f20713e;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(set, 10));
            for (c cVar : set) {
                arrayList.add(com.withpersona.sdk2.inquiry.steps.ui.components.c.h(cVar));
            }
            return arrayList;
        }

        @Override // xp.c2
        public boolean c() {
            return false;
        }

        @Override // xp.c2
        public List f() {
            return CollectionsKt.l();
        }

        @Override // xp.c2
        public String getLabel() {
            return null;
        }

        @Override // xp.c2
        public InputSelectBoxComponentStyle getStyles() {
            return b.this.s();
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.steps.ui.components.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0259b {

        /* renamed from: com.withpersona.sdk2.inquiry.steps.ui.components.b$b$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return lr.a.d(((e) obj).b(), ((e) obj2).b());
            }
        }

        public /* synthetic */ C0259b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b a(InputInternationalDb config) {
            boolean z10;
            boolean z11;
            boolean z12;
            boolean z13;
            String str;
            String str2;
            String str3;
            JsonLogicBoolean jsonLogicBoolean;
            JsonLogicBoolean jsonLogicBoolean2;
            Boolean bool;
            Boolean bool2;
            List<InputInternationalDb.IdType> list;
            List<InputInternationalDb.IdType> allowedIdTypes;
            String countryName;
            String name;
            Intrinsics.checkNotNullParameter(config, "config");
            InputInternationalDb.Attributes attributes = config.getAttributes();
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            InputInternationalDb.Attributes attributes2 = config.getAttributes();
            if (attributes2 != null && (allowedIdTypes = attributes2.getAllowedIdTypes()) != null) {
                for (InputInternationalDb.IdType idType : allowedIdTypes) {
                    String countryCode = idType.getCountryCode();
                    if (countryCode != null && (countryName = idType.getCountryName()) != null) {
                        linkedHashSet.add(new c(countryName, countryCode));
                        Object obj = linkedHashMap.get(countryCode);
                        if (obj == null) {
                            obj = new ArrayList();
                            linkedHashMap.put(countryCode, obj);
                        }
                        Collection collection = (Collection) obj;
                        String idType2 = idType.getIdType();
                        if (idType2 != null && (name = idType.getName()) != null) {
                            collection.add(new e(idType2, name));
                        }
                    }
                }
            }
            for (Map.Entry entry : linkedHashMap.entrySet()) {
                List list2 = (List) entry.getValue();
                if (list2.size() > 1) {
                    CollectionsKt.A(list2, new a());
                }
            }
            if (attributes != null) {
                z10 = Intrinsics.areEqual(attributes.getHideCountryIfPrefilled(), Boolean.TRUE);
            } else {
                z10 = false;
            }
            if (z10 && attributes.getPrefillIdbCountry() != null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (attributes != null) {
                z12 = Intrinsics.areEqual(attributes.getHideTypeIfPrefilled(), Boolean.TRUE);
            } else {
                z12 = false;
            }
            if (z12 && attributes.getPrefillIdbType() != null) {
                z13 = true;
            } else {
                z13 = false;
            }
            String name2 = config.getName();
            InputInternationalDb.Attributes attributes3 = config.getAttributes();
            InputSelectComponentStyle inputSelectComponentStyle = null;
            if (attributes3 != null) {
                str = attributes3.getPrefillIdbCountry();
            } else {
                str = null;
            }
            InputInternationalDb.Attributes attributes4 = config.getAttributes();
            if (attributes4 != null) {
                str2 = attributes4.getPrefillIdbType();
            } else {
                str2 = null;
            }
            InputInternationalDb.Attributes attributes5 = config.getAttributes();
            if (attributes5 != null) {
                str3 = attributes5.getPrefillIdbValue();
            } else {
                str3 = null;
            }
            InputInternationalDb.Attributes attributes6 = config.getAttributes();
            if (attributes6 != null) {
                jsonLogicBoolean = attributes6.getHidden();
            } else {
                jsonLogicBoolean = null;
            }
            InputInternationalDb.Attributes attributes7 = config.getAttributes();
            if (attributes7 != null) {
                jsonLogicBoolean2 = attributes7.getDisabled();
            } else {
                jsonLogicBoolean2 = null;
            }
            InputInternationalDb.Attributes attributes8 = config.getAttributes();
            if (attributes8 != null) {
                bool = attributes8.getHideCountryIfSingleChoice();
            } else {
                bool = null;
            }
            InputInternationalDb.Attributes attributes9 = config.getAttributes();
            if (attributes9 != null) {
                bool2 = attributes9.getHideTypeIfSingleChoice();
            } else {
                bool2 = null;
            }
            InputInternationalDb.Attributes attributes10 = config.getAttributes();
            if (attributes10 != null) {
                list = attributes10.getAllowedIdTypes();
            } else {
                list = null;
            }
            InputInternationalDb.InputInternationalDbComponentStyle styles = config.getStyles();
            if (styles != null) {
                inputSelectComponentStyle = styles.getInputSelectStyle();
            }
            return new b(name2, str, str2, str3, jsonLogicBoolean, jsonLogicBoolean2, z11, z13, bool, bool2, list, inputSelectComponentStyle);
        }

        private C0259b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final String f20714a;

        /* renamed from: b  reason: collision with root package name */
        private final String f20715b;

        public c(String countryName, String countryCode) {
            Intrinsics.checkNotNullParameter(countryName, "countryName");
            Intrinsics.checkNotNullParameter(countryCode, "countryCode");
            this.f20714a = countryName;
            this.f20715b = countryCode;
        }

        public final String a() {
            return this.f20715b;
        }

        public final String b() {
            return this.f20714a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof c) {
                c cVar = (c) obj;
                return Intrinsics.areEqual(this.f20714a, cVar.f20714a) && Intrinsics.areEqual(this.f20715b, cVar.f20715b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f20714a.hashCode() * 31) + this.f20715b.hashCode();
        }

        public String toString() {
            String str = this.f20714a;
            String str2 = this.f20715b;
            return "CountryOption(countryName=" + str + ", countryCode=" + str2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements Parcelable.Creator {
        /* JADX WARN: Multi-variable type inference failed */
        @Override // android.os.Parcelable.Creator
        /* renamed from: a */
        public final b createFromParcel(Parcel parcel) {
            int i10;
            boolean z10;
            Boolean valueOf;
            Boolean valueOf2;
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            String readString = parcel.readString();
            String readString2 = parcel.readString();
            String readString3 = parcel.readString();
            String readString4 = parcel.readString();
            JsonLogicBoolean jsonLogicBoolean = (JsonLogicBoolean) parcel.readParcelable(b.class.getClassLoader());
            JsonLogicBoolean jsonLogicBoolean2 = (JsonLogicBoolean) parcel.readParcelable(b.class.getClassLoader());
            boolean z11 = false;
            boolean z12 = 1;
            if (parcel.readInt() != 0) {
                i10 = 0;
                z11 = true;
            } else {
                i10 = 0;
            }
            if (parcel.readInt() != 0) {
                z10 = true;
            } else {
                z10 = true;
                z12 = i10;
            }
            ArrayList arrayList = null;
            if (parcel.readInt() == 0) {
                valueOf = null;
            } else {
                valueOf = Boolean.valueOf(parcel.readInt() != 0 ? z10 ? 1 : 0 : i10);
            }
            if (parcel.readInt() == 0) {
                valueOf2 = null;
            } else {
                boolean z13 = z10;
                if (parcel.readInt() == 0) {
                    z13 = i10;
                }
                valueOf2 = Boolean.valueOf(z13);
            }
            if (parcel.readInt() != 0) {
                int readInt = parcel.readInt();
                ArrayList arrayList2 = new ArrayList(readInt);
                while (i10 != readInt) {
                    arrayList2.add(parcel.readParcelable(b.class.getClassLoader()));
                    i10++;
                }
                arrayList = arrayList2;
            }
            return new b(readString, readString2, readString3, readString4, jsonLogicBoolean, jsonLogicBoolean2, z11, z12, valueOf, valueOf2, arrayList, (InputSelectComponentStyle) parcel.readParcelable(b.class.getClassLoader()));
        }

        @Override // android.os.Parcelable.Creator
        /* renamed from: b */
        public final b[] newArray(int i10) {
            return new b[i10];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private final String f20716a;

        /* renamed from: b  reason: collision with root package name */
        private final String f20717b;

        public e(String idType, String name) {
            Intrinsics.checkNotNullParameter(idType, "idType");
            Intrinsics.checkNotNullParameter(name, "name");
            this.f20716a = idType;
            this.f20717b = name;
        }

        public final String a() {
            return this.f20716a;
        }

        public final String b() {
            return this.f20717b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof e) {
                e eVar = (e) obj;
                return Intrinsics.areEqual(this.f20716a, eVar.f20716a) && Intrinsics.areEqual(this.f20717b, eVar.f20717b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f20716a.hashCode() * 31) + this.f20717b.hashCode();
        }

        public String toString() {
            String str = this.f20716a;
            String str2 = this.f20717b;
            return "IdOption(idType=" + str + ", name=" + str2 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return lr.a.d(((e) obj).b(), ((e) obj2).b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements c2 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f20719e;

        g(List list) {
            this.f20719e = list;
        }

        @Override // xp.c2
        public List b() {
            List<e> list = this.f20719e;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (e eVar : list) {
                arrayList.add(com.withpersona.sdk2.inquiry.steps.ui.components.c.i(eVar));
            }
            return arrayList;
        }

        @Override // xp.c2
        public boolean c() {
            return false;
        }

        @Override // xp.c2
        public List f() {
            return CollectionsKt.l();
        }

        @Override // xp.c2
        public String getLabel() {
            return null;
        }

        @Override // xp.c2
        public InputSelectBoxComponentStyle getStyles() {
            return b.this.s();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements Comparator {
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return lr.a.d(((c) obj).b(), ((c) obj2).b());
        }
    }

    public b(String name, String str, String str2, String str3, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, boolean z10, boolean z11, Boolean bool, Boolean bool2, List list, InputSelectComponentStyle inputSelectComponentStyle) {
        b4 b4Var;
        Object obj;
        b4 b4Var2;
        String str4;
        Object obj2;
        String countryName;
        String name2;
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20697d = name;
        this.f20698e = str;
        this.f20699i = str2;
        this.f20700o = str3;
        this.f20701p = jsonLogicBoolean;
        this.f20702q = jsonLogicBoolean2;
        this.f20703r = z10;
        this.f20704s = z11;
        this.f20705t = bool;
        this.f20706u = bool2;
        this.f20707v = list;
        this.f20708w = inputSelectComponentStyle;
        this.f20709x = new ArrayList();
        this.D = w.a(str3 == null ? "" : str3);
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                InputInternationalDb.IdType idType = (InputInternationalDb.IdType) it.next();
                String countryCode = idType.getCountryCode();
                if (countryCode != null && (countryName = idType.getCountryName()) != null) {
                    linkedHashSet.add(new c(countryName, countryCode));
                    Object obj3 = linkedHashMap.get(countryCode);
                    if (obj3 == null) {
                        obj3 = new ArrayList();
                        linkedHashMap.put(countryCode, obj3);
                    }
                    Collection collection = (Collection) obj3;
                    String idType2 = idType.getIdType();
                    if (idType2 != null && (name2 = idType.getName()) != null) {
                        collection.add(new e(idType2, name2));
                    }
                }
            }
        }
        for (Map.Entry entry : linkedHashMap.entrySet()) {
            List list2 = (List) entry.getValue();
            if (list2.size() > 1) {
                CollectionsKt.A(list2, new f());
            }
        }
        Iterator it2 = linkedHashSet.iterator();
        while (true) {
            b4Var = null;
            if (it2.hasNext()) {
                obj = it2.next();
                if (Intrinsics.areEqual(((c) obj).a(), this.f20698e)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        c cVar = (c) obj;
        if (cVar != null) {
            b4Var2 = com.withpersona.sdk2.inquiry.steps.ui.components.c.h(cVar);
        } else {
            b4Var2 = null;
        }
        if (b4Var2 != null) {
            str4 = b4Var2.a();
        } else {
            str4 = null;
        }
        List list3 = (List) linkedHashMap.get(str4);
        if (list3 != null) {
            Iterator it3 = list3.iterator();
            while (true) {
                if (it3.hasNext()) {
                    obj2 = it3.next();
                    if (Intrinsics.areEqual(((e) obj2).a(), this.f20699i)) {
                        break;
                    }
                } else {
                    obj2 = null;
                    break;
                }
            }
            e eVar = (e) obj2;
            if (eVar != null) {
                b4Var = com.withpersona.sdk2.inquiry.steps.ui.components.c.i(eVar);
            }
        }
        this.f20710y = new k(b4Var2);
        this.f20711z = new k(b4Var);
        this.A = CollectionsKt.W0(CollectionsKt.h1(linkedHashSet), new h());
        this.B = linkedHashMap;
        this.C = new a(linkedHashSet);
    }

    public static /* synthetic */ b b(b bVar, String str, String str2, String str3, String str4, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, boolean z10, boolean z11, Boolean bool, Boolean bool2, List list, InputSelectComponentStyle inputSelectComponentStyle, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = bVar.f20697d;
        }
        if ((i10 & 2) != 0) {
            str2 = bVar.f20698e;
        }
        if ((i10 & 4) != 0) {
            str3 = bVar.f20699i;
        }
        if ((i10 & 8) != 0) {
            str4 = bVar.f20700o;
        }
        if ((i10 & 16) != 0) {
            jsonLogicBoolean = bVar.f20701p;
        }
        if ((i10 & 32) != 0) {
            jsonLogicBoolean2 = bVar.f20702q;
        }
        if ((i10 & 64) != 0) {
            z10 = bVar.f20703r;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z11 = bVar.f20704s;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            bool = bVar.f20705t;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            bool2 = bVar.f20706u;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            list = bVar.f20707v;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            inputSelectComponentStyle = bVar.f20708w;
        }
        List list2 = list;
        InputSelectComponentStyle inputSelectComponentStyle2 = inputSelectComponentStyle;
        Boolean bool3 = bool;
        Boolean bool4 = bool2;
        boolean z12 = z10;
        boolean z13 = z11;
        JsonLogicBoolean jsonLogicBoolean3 = jsonLogicBoolean;
        JsonLogicBoolean jsonLogicBoolean4 = jsonLogicBoolean2;
        return bVar.a(str, str2, str3, str4, jsonLogicBoolean3, jsonLogicBoolean4, z12, z13, bool3, bool4, list2, inputSelectComponentStyle2);
    }

    public final b a(String name, String str, String str2, String str3, JsonLogicBoolean jsonLogicBoolean, JsonLogicBoolean jsonLogicBoolean2, boolean z10, boolean z11, Boolean bool, Boolean bool2, List list, InputSelectComponentStyle inputSelectComponentStyle) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new b(name, str, str2, str3, jsonLogicBoolean, jsonLogicBoolean2, z10, z11, bool, bool2, list, inputSelectComponentStyle);
    }

    public final List c() {
        return this.f20707v;
    }

    @Override // xp.e0
    public List d() {
        return this.f20709x;
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public final List e() {
        return this.A;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            return Intrinsics.areEqual(this.f20697d, bVar.f20697d) && Intrinsics.areEqual(this.f20698e, bVar.f20698e) && Intrinsics.areEqual(this.f20699i, bVar.f20699i) && Intrinsics.areEqual(this.f20700o, bVar.f20700o) && Intrinsics.areEqual(this.f20701p, bVar.f20701p) && Intrinsics.areEqual(this.f20702q, bVar.f20702q) && this.f20703r == bVar.f20703r && this.f20704s == bVar.f20704s && Intrinsics.areEqual(this.f20705t, bVar.f20705t) && Intrinsics.areEqual(this.f20706u, bVar.f20706u) && Intrinsics.areEqual(this.f20707v, bVar.f20707v) && Intrinsics.areEqual(this.f20708w, bVar.f20708w);
        }
        return false;
    }

    public final k f() {
        return this.f20710y;
    }

    public final c2 g() {
        return this.C;
    }

    @Override // xp.v
    public JsonLogicBoolean getDisabled() {
        return this.f20702q;
    }

    @Override // xp.e0
    public JsonLogicBoolean getHidden() {
        return this.f20701p;
    }

    @Override // xp.k5
    public String getName() {
        return this.f20697d;
    }

    public int hashCode() {
        int hashCode = this.f20697d.hashCode() * 31;
        String str = this.f20698e;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.f20699i;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.f20700o;
        int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean = this.f20701p;
        int hashCode5 = (hashCode4 + (jsonLogicBoolean == null ? 0 : jsonLogicBoolean.hashCode())) * 31;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20702q;
        int hashCode6 = (((((hashCode5 + (jsonLogicBoolean2 == null ? 0 : jsonLogicBoolean2.hashCode())) * 31) + Boolean.hashCode(this.f20703r)) * 31) + Boolean.hashCode(this.f20704s)) * 31;
        Boolean bool = this.f20705t;
        int hashCode7 = (hashCode6 + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.f20706u;
        int hashCode8 = (hashCode7 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        List list = this.f20707v;
        int hashCode9 = (hashCode8 + (list == null ? 0 : list.hashCode())) * 31;
        InputSelectComponentStyle inputSelectComponentStyle = this.f20708w;
        return hashCode9 + (inputSelectComponentStyle != null ? inputSelectComponentStyle.hashCode() : 0);
    }

    public final boolean i() {
        return this.f20703r;
    }

    public final Boolean j() {
        return this.f20705t;
    }

    public final boolean k() {
        return this.f20704s;
    }

    public final Boolean m() {
        return this.f20706u;
    }

    public final List n() {
        Map map = this.B;
        if (map != null) {
            return (List) map.get(this.f20698e);
        }
        return null;
    }

    public final k o() {
        return this.f20711z;
    }

    public final c2 p() {
        List n10 = n();
        if (n10 == null) {
            return null;
        }
        return new g(n10);
    }

    public final String q() {
        return this.f20700o;
    }

    public final t r() {
        return this.D;
    }

    public final InputSelectComponentStyle s() {
        return this.f20708w;
    }

    public final String t() {
        return this.f20698e;
    }

    public String toString() {
        String str = this.f20697d;
        String str2 = this.f20698e;
        String str3 = this.f20699i;
        String str4 = this.f20700o;
        JsonLogicBoolean jsonLogicBoolean = this.f20701p;
        JsonLogicBoolean jsonLogicBoolean2 = this.f20702q;
        boolean z10 = this.f20703r;
        boolean z11 = this.f20704s;
        Boolean bool = this.f20705t;
        Boolean bool2 = this.f20706u;
        List list = this.f20707v;
        InputSelectComponentStyle inputSelectComponentStyle = this.f20708w;
        return "InputInternationalDbComponent(name=" + str + ", selectedCountry=" + str2 + ", selectedIdType=" + str3 + ", idValue=" + str4 + ", hidden=" + jsonLogicBoolean + ", disabled=" + jsonLogicBoolean2 + ", hideCountryField=" + z10 + ", hideIdTypeField=" + z11 + ", hideCountryIfSingleChoice=" + bool + ", hideTypeIfSingleChoice=" + bool2 + ", allowedIdTypes=" + list + ", inputSelectStyle=" + inputSelectComponentStyle + ")";
    }

    public final String u() {
        return this.f20699i;
    }

    public final b v(b4 b4Var) {
        String str;
        if (b4Var != null) {
            str = b4Var.a();
        } else {
            str = null;
        }
        b b10 = b(this, null, str, null, null, null, null, false, false, null, null, null, null, 4093, null);
        b10.f20710y = this.f20710y;
        b10.f20711z = this.f20711z;
        b10.D = this.D;
        return b10;
    }

    public final b w(b4 b4Var) {
        String str;
        if (b4Var != null) {
            str = b4Var.a();
        } else {
            str = null;
        }
        b b10 = b(this, null, null, str, null, null, null, false, false, null, null, null, null, 4091, null);
        b10.f20710y = this.f20710y;
        b10.f20711z = this.f20711z;
        b10.D = this.D;
        return b10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.f20697d);
        dest.writeString(this.f20698e);
        dest.writeString(this.f20699i);
        dest.writeString(this.f20700o);
        dest.writeParcelable(this.f20701p, i10);
        dest.writeParcelable(this.f20702q, i10);
        dest.writeInt(this.f20703r ? 1 : 0);
        dest.writeInt(this.f20704s ? 1 : 0);
        Boolean bool = this.f20705t;
        if (bool == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(bool.booleanValue() ? 1 : 0);
        }
        Boolean bool2 = this.f20706u;
        if (bool2 == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(bool2.booleanValue() ? 1 : 0);
        }
        List<Parcelable> list = this.f20707v;
        if (list == null) {
            dest.writeInt(0);
        } else {
            dest.writeInt(1);
            dest.writeInt(list.size());
            for (Parcelable parcelable : list) {
                dest.writeParcelable(parcelable, i10);
            }
        }
        dest.writeParcelable(this.f20708w, i10);
    }

    public final b y(String str) {
        b b10 = b(this, null, null, null, str, null, null, false, false, null, null, null, null, 4087, null);
        b10.f20710y = this.f20710y;
        b10.f20711z = this.f20711z;
        b10.D = this.D;
        return b10;
    }
}
