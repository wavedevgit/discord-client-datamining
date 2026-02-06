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
    public static final a f17641e;

    /* renamed from: i  reason: collision with root package name */
    public static final g f17642i = new g("Number", 0, InquiryField.FloatField.TYPE2);

    /* renamed from: o  reason: collision with root package name */
    public static final g f17643o = new g("String", 1, InquiryField.StringField.TYPE);

    /* renamed from: p  reason: collision with root package name */
    public static final g f17644p = new g("Boolean", 2, InquiryField.BooleanField.TYPE);

    /* renamed from: q  reason: collision with root package name */
    public static final g f17645q = new g("Color", 3, ViewProps.COLOR);

    /* renamed from: r  reason: collision with root package name */
    public static final g f17646r = new g("Trigger", 4, "trigger");

    /* renamed from: s  reason: collision with root package name */
    public static final g f17647s = new g("Artboard", 5, "artboard");

    /* renamed from: t  reason: collision with root package name */
    public static final g f17648t = new g("Image", 6, "image");

    /* renamed from: u  reason: collision with root package name */
    public static final g f17649u = new g("Enum", 7, "enum");

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ g[] f17650v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f17651w;

    /* renamed from: d  reason: collision with root package name */
    private final String f17652d;

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
        f17650v = a10;
        f17651w = xr.a.a(a10);
        f17641e = new a(null);
    }

    private g(String str, int i10, String str2) {
        this.f17652d = str2;
    }

    private static final /* synthetic */ g[] a() {
        return new g[]{f17642i, f17643o, f17644p, f17645q, f17646r, f17647s, f17648t, f17649u};
    }

    public static EnumEntries d() {
        return f17651w;
    }

    public static g valueOf(String str) {
        return (g) Enum.valueOf(g.class, str);
    }

    public static g[] values() {
        return (g[]) f17650v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17652d;
    }
}
