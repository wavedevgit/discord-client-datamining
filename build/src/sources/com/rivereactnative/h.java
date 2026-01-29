package com.rivereactnative;

import app.rive.runtime.kotlin.core.errors.AnimationException;
import app.rive.runtime.kotlin.core.errors.ArtboardException;
import app.rive.runtime.kotlin.core.errors.MalformedFileException;
import app.rive.runtime.kotlin.core.errors.RiveException;
import app.rive.runtime.kotlin.core.errors.StateMachineException;
import app.rive.runtime.kotlin.core.errors.StateMachineInputException;
import app.rive.runtime.kotlin.core.errors.TextValueRunException;
import app.rive.runtime.kotlin.core.errors.UnsupportedRuntimeVersionException;
import app.rive.runtime.kotlin.core.errors.ViewModelException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {
    private static final /* synthetic */ EnumEntries A;

    /* renamed from: i  reason: collision with root package name */
    public static final a f18652i;

    /* renamed from: o  reason: collision with root package name */
    public static final h f18653o = new h("FileNotFound", 0, "FileNotFound");

    /* renamed from: p  reason: collision with root package name */
    public static final h f18654p = new h("UnsupportedRuntimeVersion", 1, "UnsupportedRuntimeVersion");

    /* renamed from: q  reason: collision with root package name */
    public static final h f18655q = new h("IncorrectRiveFileUrl", 2, "IncorrectRiveFileUrl");

    /* renamed from: r  reason: collision with root package name */
    public static final h f18656r = new h("IncorrectAnimationName", 3, "IncorrectAnimationName");

    /* renamed from: s  reason: collision with root package name */
    public static final h f18657s = new h("MalformedFile", 4, "MalformedFile");

    /* renamed from: t  reason: collision with root package name */
    public static final h f18658t = new h("IncorrectArtboardName", 5, "IncorrectArtboardName");

    /* renamed from: u  reason: collision with root package name */
    public static final h f18659u = new h("IncorrectStateMachineName", 6, "IncorrectStateMachineName");

    /* renamed from: v  reason: collision with root package name */
    public static final h f18660v = new h("IncorrectStateMachineInput", 7, "IncorrectStateMachineInput");

    /* renamed from: w  reason: collision with root package name */
    public static final h f18661w = new h("TextRunNotFoundError", 8, "TextRunNotFoundError");

    /* renamed from: x  reason: collision with root package name */
    public static final h f18662x = new h("DataBindingError", 9, "DataBindingError");

    /* renamed from: y  reason: collision with root package name */
    public static final h f18663y = new h("UnusedReferencedAssetError", 10, "UnusedReferencedAssetError");

    /* renamed from: z  reason: collision with root package name */
    private static final /* synthetic */ h[] f18664z;

    /* renamed from: d  reason: collision with root package name */
    private final String f18665d;

    /* renamed from: e  reason: collision with root package name */
    private String f18666e = "Default message";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a(RiveException ex) {
            Intrinsics.checkNotNullParameter(ex, "ex");
            if (ex instanceof ArtboardException) {
                h hVar = h.f18658t;
                String message = ex.getMessage();
                Intrinsics.checkNotNull(message);
                hVar.e(message);
                return hVar;
            } else if (ex instanceof UnsupportedRuntimeVersionException) {
                h hVar2 = h.f18654p;
                String message2 = ex.getMessage();
                Intrinsics.checkNotNull(message2);
                hVar2.e(message2);
                return hVar2;
            } else if (ex instanceof MalformedFileException) {
                h hVar3 = h.f18657s;
                String message3 = ex.getMessage();
                Intrinsics.checkNotNull(message3);
                hVar3.e(message3);
                return hVar3;
            } else if (ex instanceof AnimationException) {
                h hVar4 = h.f18656r;
                String message4 = ex.getMessage();
                Intrinsics.checkNotNull(message4);
                hVar4.e(message4);
                return hVar4;
            } else if (ex instanceof StateMachineException) {
                h hVar5 = h.f18659u;
                String message5 = ex.getMessage();
                Intrinsics.checkNotNull(message5);
                hVar5.e(message5);
                return hVar5;
            } else if (ex instanceof StateMachineInputException) {
                h hVar6 = h.f18660v;
                String message6 = ex.getMessage();
                Intrinsics.checkNotNull(message6);
                hVar6.e(message6);
                return hVar6;
            } else if (ex instanceof TextValueRunException) {
                h hVar7 = h.f18661w;
                String message7 = ex.getMessage();
                Intrinsics.checkNotNull(message7);
                hVar7.e(message7);
                return hVar7;
            } else if (ex instanceof ViewModelException) {
                h hVar8 = h.f18662x;
                String message8 = ex.getMessage();
                Intrinsics.checkNotNull(message8);
                hVar8.e(message8);
                return hVar8;
            } else {
                return null;
            }
        }

        private a() {
        }
    }

    static {
        h[] a10 = a();
        f18664z = a10;
        A = pr.a.a(a10);
        f18652i = new a(null);
    }

    private h(String str, int i10, String str2) {
        this.f18665d = str2;
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f18653o, f18654p, f18655q, f18656r, f18657s, f18658t, f18659u, f18660v, f18661w, f18662x, f18663y};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f18664z.clone();
    }

    public final String d() {
        return this.f18666e;
    }

    public final void e(String str) {
        Intrinsics.checkNotNullParameter(str, "<set-?>");
        this.f18666e = str;
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f18665d;
    }
}
