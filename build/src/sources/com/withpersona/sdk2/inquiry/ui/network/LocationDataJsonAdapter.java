package com.withpersona.sdk2.inquiry.ui.network;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import java.lang.reflect.Constructor;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import ym.c;
@kotlin.Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R\u001c\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0017R\u001e\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001d¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/LocationDataJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/ui/network/LocationData;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/ui/network/LocationData;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/ui/network/LocationData;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "c", "nullableStringAdapter", "Ljava/lang/reflect/Constructor;", "d", "Ljava/lang/reflect/Constructor;", "constructorRef", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLocationDataJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LocationDataJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/ui/network/LocationDataJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,158:1\n1#2:159\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class LocationDataJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19822a;

    /* renamed from: b  reason: collision with root package name */
    private final h f19823b;

    /* renamed from: c  reason: collision with root package name */
    private final h f19824c;

    /* renamed from: d  reason: collision with root package name */
    private volatile Constructor f19825d;

    public LocationDataJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(StackTraceHelper.ID_KEY, "address_street_1", "address_street_2", "address_city", "address_subdivision", "address_postal_code", "address_country_code", "address_business_name");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19822a = a10;
        h f10 = moshi.f(String.class, x0.d(), StackTraceHelper.ID_KEY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19823b = f10;
        h f11 = moshi.f(String.class, x0.d(), "addressStreet1");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f19824c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public LocationData fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        int i10 = -1;
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        String str8 = null;
        while (reader.hasNext()) {
            switch (reader.W(this.f19822a)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    str = (String) this.f19823b.fromJson(reader);
                    if (str != null) {
                        break;
                    } else {
                        throw c.x(StackTraceHelper.ID_KEY, StackTraceHelper.ID_KEY, reader);
                    }
                case 1:
                    str2 = (String) this.f19824c.fromJson(reader);
                    i10 &= -3;
                    break;
                case 2:
                    str3 = (String) this.f19824c.fromJson(reader);
                    i10 &= -5;
                    break;
                case 3:
                    str4 = (String) this.f19824c.fromJson(reader);
                    i10 &= -9;
                    break;
                case 4:
                    str5 = (String) this.f19824c.fromJson(reader);
                    i10 &= -17;
                    break;
                case 5:
                    str6 = (String) this.f19824c.fromJson(reader);
                    i10 &= -33;
                    break;
                case 6:
                    str7 = (String) this.f19824c.fromJson(reader);
                    i10 &= -65;
                    break;
                case 7:
                    str8 = (String) this.f19824c.fromJson(reader);
                    i10 &= -129;
                    break;
            }
        }
        reader.z();
        if (i10 == -255) {
            String str9 = str8;
            String str10 = str7;
            String str11 = str6;
            String str12 = str5;
            String str13 = str4;
            String str14 = str3;
            String str15 = str2;
            String str16 = str;
            if (str16 != null) {
                return new LocationData(str16, str15, str14, str13, str12, str11, str10, str9);
            }
            throw c.o(StackTraceHelper.ID_KEY, StackTraceHelper.ID_KEY, reader);
        }
        String str17 = str8;
        String str18 = str7;
        String str19 = str6;
        String str20 = str5;
        String str21 = str4;
        String str22 = str3;
        String str23 = str2;
        String str24 = str;
        Constructor constructor = this.f19825d;
        if (constructor == null) {
            constructor = LocationData.class.getDeclaredConstructor(String.class, String.class, String.class, String.class, String.class, String.class, String.class, String.class, Integer.TYPE, c.f54853c);
            this.f19825d = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (str24 != null) {
            Object newInstance = constructor.newInstance(str24, str23, str22, str21, str20, str19, str18, str17, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return (LocationData) newInstance;
        }
        throw c.o(StackTraceHelper.ID_KEY, StackTraceHelper.ID_KEY, reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, LocationData locationData) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (locationData != null) {
            writer.k();
            writer.W(StackTraceHelper.ID_KEY);
            this.f19823b.toJson(writer, locationData.h());
            writer.W("address_street_1");
            this.f19824c.toJson(writer, locationData.e());
            writer.W("address_street_2");
            this.f19824c.toJson(writer, locationData.f());
            writer.W("address_city");
            this.f19824c.toJson(writer, locationData.b());
            writer.W("address_subdivision");
            this.f19824c.toJson(writer, locationData.g());
            writer.W("address_postal_code");
            this.f19824c.toJson(writer, locationData.d());
            writer.W("address_country_code");
            this.f19824c.toJson(writer, locationData.c());
            writer.W("address_business_name");
            this.f19824c.toJson(writer, locationData.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(34);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("LocationData");
        sb2.append(')');
        return sb2.toString();
    }
}
