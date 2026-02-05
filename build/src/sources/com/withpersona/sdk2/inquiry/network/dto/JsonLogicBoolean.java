package com.withpersona.sdk2.inquiry.network.dto;

import android.os.Parcel;
import android.os.Parcelable;
import com.squareup.moshi.f;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.squareup.moshi.z;
import com.withpersona.sdk2.inquiry.network.dto.ParsedRules;
import defpackage.g;
import java.util.ArrayList;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.l;
import or.p;
import or.v;
import org.jetbrains.annotations.NotNull;
@i(generateAdapter = false)
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010$\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0087\b\u0018\u0000 $2\u00020\u0001:\u0001$B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J+\u0010\u0010\u001a\u0004\u0018\u00010\u00112\u0012\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00140\u00132\b\u0010\u0015\u001a\u0004\u0018\u00010\u0014¢\u0006\u0002\u0010\u0016J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0006\u0010\u0019\u001a\u00020\u001aJ\u0013\u0010\u001b\u001a\u00020\u00112\b\u0010\u001c\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u001d\u001a\u00020\u001aHÖ\u0001J\t\u0010\u001e\u001a\u00020\u0003HÖ\u0001J\u0016\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u001aR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R#\u0010\b\u001a\u0004\u0018\u00010\t8BX\u0083\u0084\u0002¢\u0006\u0012\n\u0004\b\u000e\u0010\u000f\u0012\u0004\b\n\u0010\u000b\u001a\u0004\b\f\u0010\r¨\u0006%"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "Landroid/os/Parcelable;", "rule", "", "<init>", "(Ljava/lang/String;)V", "getRule", "()Ljava/lang/String;", "parsedRules", "Lcom/withpersona/sdk2/inquiry/network/dto/ParsedRules;", "getParsedRules$annotations", "()V", "getParsedRules", "()Lcom/withpersona/sdk2/inquiry/network/dto/ParsedRules;", "parsedRules$delegate", "Lkotlin/Lazy;", "getValue", "", "formValues", "", "", "thisComponentValue", "(Ljava/util/Map;Ljava/lang/Object;)Ljava/lang/Boolean;", "component1", "copy", "describeContents", "", "equals", "other", "hashCode", "toString", "writeToParcel", "", "dest", "Landroid/os/Parcel;", "flags", "Companion", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nJsonLogicBoolean.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JsonLogicBoolean.kt\ncom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,122:1\n136#2,9:123\n216#2:132\n217#2:134\n145#2:135\n1#3:133\n*S KotlinDebug\n*F\n+ 1 JsonLogicBoolean.kt\ncom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean\n*L\n56#1:123,9\n56#1:132\n56#1:134\n56#1:135\n56#1:133\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class JsonLogicBoolean implements Parcelable {
    @NotNull
    private final Lazy parsedRules$delegate;
    @NotNull
    private final String rule;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final Parcelable.Creator<JsonLogicBoolean> CREATOR = new Creator();

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0003\u0010\u0004J\u0017\u0010\u0007\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u0005H\u0017¢\u0006\u0004\b\u0007\u0010\bJ!\u0010\r\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean$Companion;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "<init>", "()V", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;", "Lcom/squareup/moshi/t;", "writer", "value", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/JsonLogicBoolean;)V", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion extends h {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // com.squareup.moshi.h
        @z
        public void toJson(@NotNull t writer, JsonLogicBoolean jsonLogicBoolean) {
            Intrinsics.checkNotNullParameter(writer, "writer");
        }

        private Companion() {
        }

        @Override // com.squareup.moshi.h
        @f
        @NotNull
        public JsonLogicBoolean fromJson(@NotNull m reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            return new JsonLogicBoolean(reader.o().L1().M());
        }
    }

    @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Creator implements Parcelable.Creator<JsonLogicBoolean> {
        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final JsonLogicBoolean createFromParcel(Parcel parcel) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            return new JsonLogicBoolean(parcel.readString());
        }

        /* JADX WARN: Can't rename method to resolve collision */
        @Override // android.os.Parcelable.Creator
        public final JsonLogicBoolean[] newArray(int i10) {
            return new JsonLogicBoolean[i10];
        }
    }

    public JsonLogicBoolean(@NotNull String rule) {
        Intrinsics.checkNotNullParameter(rule, "rule");
        this.rule = rule;
        this.parsedRules$delegate = l.a(new Function0() { // from class: com.withpersona.sdk2.inquiry.network.dto.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ParsedRules parsedRules_delegate$lambda$1;
                parsedRules_delegate$lambda$1 = JsonLogicBoolean.parsedRules_delegate$lambda$1(JsonLogicBoolean.this);
                return parsedRules_delegate$lambda$1;
            }
        });
    }

    public static /* synthetic */ JsonLogicBoolean copy$default(JsonLogicBoolean jsonLogicBoolean, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = jsonLogicBoolean.rule;
        }
        return jsonLogicBoolean.copy(str);
    }

    private final ParsedRules getParsedRules() {
        return (ParsedRules) this.parsedRules$delegate.getValue();
    }

    @g(ignore = true)
    private static /* synthetic */ void getParsedRules$annotations() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ParsedRules parsedRules_delegate$lambda$1(JsonLogicBoolean jsonLogicBoolean) {
        Pair pair;
        Object fromJson = new w.b().d().c(Object.class).nullSafe().lenient().fromJson(jsonLogicBoolean.rule);
        if (fromJson instanceof Map) {
            ArrayList arrayList = new ArrayList();
            for (Map.Entry entry : ((Map) fromJson).entrySet()) {
                Object key = entry.getKey();
                Object value = entry.getValue();
                if (key instanceof String) {
                    pair = v.a(key, value);
                } else {
                    pair = null;
                }
                if (pair != null) {
                    arrayList.add(pair);
                }
            }
            return new ParsedRules.ComplexRules(o0.u(arrayList));
        } else if (!(fromJson instanceof Boolean)) {
            return null;
        } else {
            return new ParsedRules.PrimitiveRule(fromJson);
        }
    }

    @NotNull
    public final String component1() {
        return this.rule;
    }

    @NotNull
    public final JsonLogicBoolean copy(@NotNull String rule) {
        Intrinsics.checkNotNullParameter(rule, "rule");
        return new JsonLogicBoolean(rule);
    }

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof JsonLogicBoolean) && Intrinsics.areEqual(this.rule, ((JsonLogicBoolean) obj).rule);
    }

    @NotNull
    public final String getRule() {
        return this.rule;
    }

    public final Boolean getValue(@NotNull Map<String, ? extends Object> formValues, Object obj) {
        Intrinsics.checkNotNullParameter(formValues, "formValues");
        ParsedRules parsedRules = getParsedRules();
        if (parsedRules == null) {
            return null;
        }
        if (parsedRules instanceof ParsedRules.ComplexRules) {
            g a10 = JsonLogicBooleanKt.access$getJsonLogicEngine().a(((ParsedRules.ComplexRules) parsedRules).getExpression(), o0.m(v.a("form", formValues), v.a("value", obj)));
            if (a10 instanceof g.b) {
                Object a11 = ((g.b) a10).a();
                if (!(a11 instanceof Boolean)) {
                    return null;
                }
                return (Boolean) a11;
            } else if (Intrinsics.areEqual(a10, g.a.c.f23527a) || Intrinsics.areEqual(a10, g.a.C0332a.f23525a) || Intrinsics.areEqual(a10, g.a.b.f23526a)) {
                return null;
            } else {
                throw new p();
            }
        } else if (parsedRules instanceof ParsedRules.PrimitiveRule) {
            ParsedRules.PrimitiveRule primitiveRule = (ParsedRules.PrimitiveRule) parsedRules;
            if (!(primitiveRule.getValue() instanceof Boolean)) {
                return null;
            }
            return (Boolean) primitiveRule.getValue();
        } else {
            throw new p();
        }
    }

    public int hashCode() {
        return this.rule.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.rule;
        return "JsonLogicBoolean(rule=" + str + ")";
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(@NotNull Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        dest.writeString(this.rule);
    }
}
