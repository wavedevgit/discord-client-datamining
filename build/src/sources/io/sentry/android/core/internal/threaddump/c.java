package io.sentry.android.core.internal.threaddump;

import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.o7;
import io.sentry.protocol.DebugImage;
import io.sentry.protocol.SentryStackFrame;
import io.sentry.protocol.b0;
import io.sentry.protocol.c0;
import io.sentry.w6;
import java.math.BigInteger;
import java.nio.BufferUnderflowException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: f  reason: collision with root package name */
    private static final Pattern f27132f = Pattern.compile("\"(.*)\" (.*) ?prio=(\\d+)\\s+tid=(\\d+)\\s*(.*)");

    /* renamed from: g  reason: collision with root package name */
    private static final Pattern f27133g = Pattern.compile("\"(.*)\" (.*) ?sysTid=(\\d+)");

    /* renamed from: h  reason: collision with root package name */
    private static final Pattern f27134h = Pattern.compile(" *(?:native: )?#(\\d+) \\S+ ([0-9a-fA-F]+)\\s+((.*?)(?:\\s+\\(deleted\\))?(?:\\s+\\(offset (.*?)\\))?)(?:\\s+\\((?:\\?\\?\\?|(.*?)(?:\\+(\\d+))?)\\))?(?:\\s+\\(BuildId: (.*?)\\))?");

    /* renamed from: i  reason: collision with root package name */
    private static final Pattern f27135i = Pattern.compile(" *at (?:(.+)\\.)?([^.]+)\\.([^.]+)\\((.*):([\\d-]+)\\)");

    /* renamed from: j  reason: collision with root package name */
    private static final Pattern f27136j = Pattern.compile(" *at (?:(.+)\\.)?([^.]+)\\.([^.]+)\\(Native method\\)");

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f27137k = Pattern.compile(" *- locked \\<([0x0-9a-fA-F]{1,16})\\> \\(a (?:(.+)\\.)?([^.]+)\\)");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f27138l = Pattern.compile(" *- sleeping on \\<([0x0-9a-fA-F]{1,16})\\> \\(a (?:(.+)\\.)?([^.]+)\\)");

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f27139m = Pattern.compile(" *- waiting on \\<([0x0-9a-fA-F]{1,16})\\> \\(a (?:(.+)\\.)?([^.]+)\\)");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f27140n = Pattern.compile(" *- waiting to lock \\<([0x0-9a-fA-F]{1,16})\\> \\(a (?:(.+)\\.)?([^.]+)\\)");

    /* renamed from: o  reason: collision with root package name */
    private static final Pattern f27141o = Pattern.compile(" *- waiting to lock \\<([0x0-9a-fA-F]{1,16})\\> \\(a (?:(.+)\\.)?([^.]+)\\)(?: held by thread (\\d+))");

    /* renamed from: p  reason: collision with root package name */
    private static final Pattern f27142p = Pattern.compile(" *- waiting to lock an unknown object");

    /* renamed from: q  reason: collision with root package name */
    private static final Pattern f27143q = Pattern.compile("\\s+");

    /* renamed from: a  reason: collision with root package name */
    private final k7 f27144a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f27145b;

    /* renamed from: c  reason: collision with root package name */
    private final o7 f27146c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f27147d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final List f27148e = new ArrayList();

    public c(k7 k7Var, boolean z10) {
        this.f27144a = k7Var;
        this.f27145b = z10;
        this.f27146c = new o7(k7Var);
    }

    private static String a(String str) {
        try {
            ByteBuffer wrap = ByteBuffer.wrap(new BigInteger("10" + str, 16).toByteArray());
            wrap.get();
            return String.format("%08x-%04x-%04x-%04x-%04x%08x", Integer.valueOf(wrap.order(ByteOrder.LITTLE_ENDIAN).getInt()), Short.valueOf(wrap.getShort()), Short.valueOf(wrap.getShort()), Short.valueOf(wrap.order(ByteOrder.BIG_ENDIAN).getShort()), Short.valueOf(wrap.getShort()), Integer.valueOf(wrap.getInt()));
        } catch (NumberFormatException | BufferUnderflowException unused) {
            return null;
        }
    }

    private void b(c0 c0Var, w6 w6Var) {
        Map k10 = c0Var.k();
        if (k10 == null) {
            k10 = new HashMap();
        }
        w6 w6Var2 = (w6) k10.get(w6Var.f());
        if (w6Var2 != null) {
            w6Var2.l(Math.max(w6Var2.g(), w6Var.g()));
        } else {
            k10.put(w6Var.f(), new w6(w6Var));
        }
        c0Var.t(k10);
    }

    private Integer d(Matcher matcher, int i10, Integer num) {
        String group = matcher.group(i10);
        if (group != null && group.length() != 0) {
            return Integer.valueOf(Integer.parseInt(group));
        }
        return num;
    }

    private Long e(Matcher matcher, int i10, Long l10) {
        String group = matcher.group(i10);
        if (group != null && group.length() != 0) {
            return Long.valueOf(Long.parseLong(group));
        }
        return l10;
    }

    private Integer g(Matcher matcher, int i10, Integer num) {
        String group = matcher.group(i10);
        if (group != null && group.length() != 0) {
            int parseInt = Integer.parseInt(group);
            Integer valueOf = Integer.valueOf(parseInt);
            if (parseInt >= 0) {
                return valueOf;
            }
        }
        return num;
    }

    private boolean h(Matcher matcher, String str) {
        matcher.reset(str);
        return matcher.matches();
    }

    private b0 j(b bVar, c0 c0Var) {
        Matcher matcher;
        String a10;
        ArrayList arrayList = new ArrayList();
        Matcher matcher2 = f27134h.matcher("");
        Matcher matcher3 = f27135i.matcher("");
        Matcher matcher4 = f27136j.matcher("");
        Matcher matcher5 = f27137k.matcher("");
        Matcher matcher6 = f27139m.matcher("");
        Matcher matcher7 = f27138l.matcher("");
        Matcher matcher8 = f27141o.matcher("");
        Matcher matcher9 = f27140n.matcher("");
        Matcher matcher10 = f27142p.matcher("");
        Matcher matcher11 = f27143q.matcher("");
        SentryStackFrame sentryStackFrame = null;
        while (true) {
            if (!bVar.a()) {
                break;
            }
            a b10 = bVar.b();
            if (b10 == null) {
                this.f27144a.getLogger().c(SentryLevel.WARNING, "Internal error while parsing thread dump.", new Object[0]);
                break;
            }
            String str = b10.f27127b;
            Matcher matcher12 = matcher11;
            if (h(matcher3, str)) {
                sentryStackFrame = new SentryStackFrame();
                String format = String.format("%s.%s", matcher3.group(1), matcher3.group(2));
                sentryStackFrame.H(format);
                sentryStackFrame.C(matcher3.group(3));
                sentryStackFrame.B(matcher3.group(4));
                sentryStackFrame.F(g(matcher3, 5, null));
                sentryStackFrame.D(this.f27146c.b(format));
                arrayList.add(sentryStackFrame);
                matcher = matcher3;
            } else if (h(matcher2, str)) {
                SentryStackFrame sentryStackFrame2 = new SentryStackFrame();
                sentryStackFrame2.J(matcher2.group(3));
                sentryStackFrame2.C(matcher2.group(6));
                sentryStackFrame2.F(d(matcher2, 7, null));
                sentryStackFrame2.E("0x" + matcher2.group(2));
                sentryStackFrame2.K("native");
                String group = matcher2.group(8);
                if (group == null) {
                    a10 = null;
                } else {
                    a10 = a(group);
                }
                if (a10 != null) {
                    if (!this.f27147d.containsKey(a10)) {
                        DebugImage debugImage = new DebugImage();
                        debugImage.setDebugId(a10);
                        matcher = matcher3;
                        debugImage.setType("elf");
                        debugImage.setCodeFile(matcher2.group(4));
                        debugImage.setCodeId(group);
                        this.f27147d.put(a10, debugImage);
                    } else {
                        matcher = matcher3;
                    }
                    sentryStackFrame2.A("rel:" + a10);
                } else {
                    matcher = matcher3;
                }
                arrayList.add(sentryStackFrame2);
                matcher11 = matcher12;
                sentryStackFrame = null;
                matcher3 = matcher;
            } else {
                matcher = matcher3;
                if (h(matcher4, str)) {
                    sentryStackFrame = new SentryStackFrame();
                    String format2 = String.format("%s.%s", matcher4.group(1), matcher4.group(2));
                    sentryStackFrame.H(format2);
                    sentryStackFrame.C(matcher4.group(3));
                    sentryStackFrame.D(this.f27146c.b(format2));
                    sentryStackFrame.I(Boolean.TRUE);
                    arrayList.add(sentryStackFrame);
                } else if (h(matcher5, str)) {
                    if (sentryStackFrame != null) {
                        w6 w6Var = new w6();
                        w6Var.l(1);
                        w6Var.h(matcher5.group(1));
                        w6Var.j(matcher5.group(2));
                        w6Var.i(matcher5.group(3));
                        sentryStackFrame.G(w6Var);
                        b(c0Var, w6Var);
                    }
                } else if (h(matcher6, str)) {
                    if (sentryStackFrame != null) {
                        w6 w6Var2 = new w6();
                        w6Var2.l(2);
                        w6Var2.h(matcher6.group(1));
                        w6Var2.j(matcher6.group(2));
                        w6Var2.i(matcher6.group(3));
                        sentryStackFrame.G(w6Var2);
                        b(c0Var, w6Var2);
                    }
                } else if (h(matcher7, str)) {
                    if (sentryStackFrame != null) {
                        w6 w6Var3 = new w6();
                        w6Var3.l(4);
                        w6Var3.h(matcher7.group(1));
                        w6Var3.j(matcher7.group(2));
                        w6Var3.i(matcher7.group(3));
                        sentryStackFrame.G(w6Var3);
                        b(c0Var, w6Var3);
                    }
                } else {
                    if (h(matcher8, str)) {
                        if (sentryStackFrame != null) {
                            w6 w6Var4 = new w6();
                            w6Var4.l(8);
                            w6Var4.h(matcher8.group(1));
                            w6Var4.j(matcher8.group(2));
                            w6Var4.i(matcher8.group(3));
                            w6Var4.k(e(matcher8, 4, null));
                            sentryStackFrame.G(w6Var4);
                            b(c0Var, w6Var4);
                        }
                    } else if (h(matcher9, str)) {
                        if (sentryStackFrame != null) {
                            w6 w6Var5 = new w6();
                            w6Var5.l(8);
                            w6Var5.h(matcher9.group(1));
                            w6Var5.j(matcher9.group(2));
                            w6Var5.i(matcher9.group(3));
                            sentryStackFrame.G(w6Var5);
                            b(c0Var, w6Var5);
                        }
                    } else if (h(matcher10, str)) {
                        if (sentryStackFrame != null) {
                            w6 w6Var6 = new w6();
                            w6Var6.l(8);
                            sentryStackFrame.G(w6Var6);
                            b(c0Var, w6Var6);
                        }
                    } else if (str.length() == 0) {
                        break;
                    } else {
                        matcher11 = matcher12;
                        if (h(matcher11, str)) {
                            break;
                        }
                        matcher3 = matcher;
                    }
                    matcher11 = matcher12;
                    matcher3 = matcher;
                }
            }
            matcher11 = matcher12;
            matcher3 = matcher;
        }
        Collections.reverse(arrayList);
        b0 b0Var = new b0(arrayList);
        b0Var.f(Boolean.TRUE);
        return b0Var;
    }

    private c0 k(b bVar) {
        c0 c0Var = new c0();
        Matcher matcher = f27132f.matcher("");
        Matcher matcher2 = f27133g.matcher("");
        if (!bVar.a()) {
            return null;
        }
        a b10 = bVar.b();
        boolean z10 = false;
        if (b10 == null) {
            this.f27144a.getLogger().c(SentryLevel.WARNING, "Internal error while parsing thread dump.", new Object[0]);
            return null;
        }
        if (h(matcher, b10.f27127b)) {
            Long e10 = e(matcher, 4, null);
            if (e10 == null) {
                this.f27144a.getLogger().c(SentryLevel.DEBUG, "No thread id in the dump, skipping thread.", new Object[0]);
                return null;
            }
            c0Var.u(e10);
            c0Var.w(matcher.group(1));
            String group = matcher.group(5);
            if (group != null) {
                if (group.contains(" ")) {
                    c0Var.z(group.substring(0, group.indexOf(32)));
                } else {
                    c0Var.z(group);
                }
            }
        } else if (h(matcher2, b10.f27127b)) {
            Long e11 = e(matcher2, 3, null);
            if (e11 == null) {
                this.f27144a.getLogger().c(SentryLevel.DEBUG, "No thread id in the dump, skipping thread.", new Object[0]);
                return null;
            }
            c0Var.u(e11);
            c0Var.w(matcher2.group(1));
        }
        String m10 = c0Var.m();
        if (m10 != null) {
            boolean equals = m10.equals("main");
            c0Var.v(Boolean.valueOf(equals));
            c0Var.q(Boolean.valueOf(equals));
            if (equals && !this.f27145b) {
                z10 = true;
            }
            c0Var.r(Boolean.valueOf(z10));
        }
        c0Var.y(j(bVar, c0Var));
        return c0Var;
    }

    public List c() {
        return new ArrayList(this.f27147d.values());
    }

    public List f() {
        return this.f27148e;
    }

    public void i(b bVar) {
        Matcher matcher = f27132f.matcher("");
        Matcher matcher2 = f27133g.matcher("");
        while (bVar.a()) {
            a b10 = bVar.b();
            if (b10 == null) {
                this.f27144a.getLogger().c(SentryLevel.WARNING, "Internal error while parsing thread dump.", new Object[0]);
                return;
            }
            String str = b10.f27127b;
            if (h(matcher, str) || h(matcher2, str)) {
                bVar.d();
                c0 k10 = k(bVar);
                if (k10 != null) {
                    this.f27148e.add(k10);
                }
            }
        }
    }
}
