package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s8 {

    /* renamed from: a  reason: collision with root package name */
    private final Boolean f29711a;

    /* renamed from: b  reason: collision with root package name */
    private final Double f29712b;

    /* renamed from: c  reason: collision with root package name */
    private final Double f29713c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f29714d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f29715e;

    public s8(Boolean bool) {
        this(bool, null);
    }

    public Double a() {
        return this.f29715e;
    }

    public Boolean b() {
        return this.f29714d;
    }

    public Double c() {
        return this.f29713c;
    }

    public Double d() {
        return this.f29712b;
    }

    public Boolean e() {
        return this.f29711a;
    }

    public s8(Boolean bool, Double d10) {
        this(bool, d10, null, Boolean.FALSE, null);
    }

    public s8(Boolean bool, Double d10, Double d11) {
        this(bool, d10, d11, Boolean.FALSE, null);
    }

    public s8(Boolean bool, Double d10, Boolean bool2, Double d11) {
        this(bool, d10, null, bool2, d11);
    }

    public s8(Boolean bool, Double d10, Double d11, Boolean bool2, Double d12) {
        this.f29711a = bool;
        this.f29712b = d10;
        this.f29713c = d11;
        this.f29714d = Boolean.valueOf(bool.booleanValue() && bool2.booleanValue());
        this.f29715e = d12;
    }
}
