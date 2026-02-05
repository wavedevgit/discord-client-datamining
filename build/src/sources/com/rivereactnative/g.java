package com.rivereactnative;

import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.NoSuchElementException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: e  reason: collision with root package name */
    public static final a f17661e;

    /* renamed from: i  reason: collision with root package name */
    public static final g f17662i = new g("Number", 0, InquiryField.FloatField.TYPE2);

    /* renamed from: o  reason: collision with root package name */
    public static final g f17663o = new g("String", 1, InquiryField.StringField.TYPE);

    /* renamed from: p  reason: collision with root package name */
    public static final g f17664p = new g("Boolean", 2, InquiryField.BooleanField.TYPE);

    /* renamed from: q  reason: collision with root package name */
    public static final g f17665q = new g("Color", 3, ViewProps.COLOR);

    /* renamed from: r  reason: collision with root package name */
    public static final g f17666r = new g("Trigger", 4, "trigger");

    /* renamed from: s  reason: collision with root package name */
    public static final g f17667s = new g("Artboard", 5, "artboard");

    /* renamed from: t  reason: collision with root package name */
    public static final g f17668t = new g("Image", 6, "image");

    /* renamed from: u  reason: collision with root package name */
    public static final g f17669u = new g("Enum", 7, "enum");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ g[] f17670v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f17671w;

    /* renamed from: d  reason: collision with root package name */
    private final String f17672d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final g a(String propertyType) {
            Intrinsics.checkNotNullParameter(propertyType, "propertyType");
            for (g gVar : g.d()) {
                if (Intrinsics.areEqual(gVar.toString(), propertyType)) {
                    return g.valueOf(gVar.name());
                }
            }
            throw new NoSuchElementException("Collection contains no element matching the predicate.");
        }

        private a() {
        }
    }

    static {
        g[] a10 = a();
        f17670v = a10;
        f17671w = vr.a.a(a10);
        f17661e = new a(null);
    }

    private g(String str, int i10, String str2) {
        this.f17672d = str2;
    }

    private static final /* synthetic */ g[] a() {
        return new g[]{f17662i, f17663o, f17664p, f17665q, f17666r, f17667s, f17668t, f17669u};
    }

    public static EnumEntries d() {
        return f17671w;
    }

    public static g valueOf(String str) {
        return (g) Enum.valueOf(g.class, str);
    }

    public static g[] values() {
        return (g[]) f17670v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17672d;
    }
}
