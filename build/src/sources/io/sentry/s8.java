package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s8 {

    /* renamed from: a  reason: collision with root package name */
    private final Boolean f28855a;

    /* renamed from: b  reason: collision with root package name */
    private final Double f28856b;

    /* renamed from: c  reason: collision with root package name */
    private final Double f28857c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f28858d;

    /* renamed from: e  reason: collision with root package name */
    private final Double f28859e;

    public s8(Boolean bool) {
        this(bool, null);
    }

    public Double a() {
        return this.f28859e;
    }

    public Boolean b() {
        return this.f28858d;
    }

    public Double c() {
        return this.f28857c;
    }

    public Double d() {
        return this.f28856b;
    }

    public Boolean e() {
        return this.f28855a;
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
        this.f28855a = bool;
        this.f28856b = d10;
        this.f28857c = d11;
        this.f28858d = Boolean.valueOf(bool.booleanValue() && bool2.booleanValue());
        this.f28859e = d12;
    }
}
