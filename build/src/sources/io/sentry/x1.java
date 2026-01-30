package io.sentry;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import io.sentry.Breadcrumb;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.c5;
import io.sentry.clientreport.c;
import io.sentry.e8;
import io.sentry.j8;
import io.sentry.l7;
import io.sentry.l8;
import io.sentry.m3;
import io.sentry.m5;
import io.sentry.m6;
import io.sentry.n3;
import io.sentry.profilemeasurements.a;
import io.sentry.profilemeasurements.b;
import io.sentry.protocol.DebugImage;
import io.sentry.protocol.SentryStackFrame;
import io.sentry.protocol.a;
import io.sentry.protocol.a0;
import io.sentry.protocol.b;
import io.sentry.protocol.b0;
import io.sentry.protocol.c;
import io.sentry.protocol.c0;
import io.sentry.protocol.d;
import io.sentry.protocol.d0;
import io.sentry.protocol.e;
import io.sentry.protocol.h;
import io.sentry.protocol.h0;
import io.sentry.protocol.i;
import io.sentry.protocol.i0;
import io.sentry.protocol.j;
import io.sentry.protocol.j0;
import io.sentry.protocol.k;
import io.sentry.protocol.l;
import io.sentry.protocol.m;
import io.sentry.protocol.n;
import io.sentry.protocol.o;
import io.sentry.protocol.q;
import io.sentry.protocol.r;
import io.sentry.protocol.s;
import io.sentry.protocol.y;
import io.sentry.protocol.z;
import io.sentry.q3;
import io.sentry.r3;
import io.sentry.rrweb.a;
import io.sentry.rrweb.c;
import io.sentry.rrweb.e;
import io.sentry.rrweb.f;
import io.sentry.rrweb.g;
import io.sentry.rrweb.i;
import io.sentry.rrweb.j;
import io.sentry.v3;
import io.sentry.v6;
import io.sentry.w6;
import io.sentry.x8;
import io.sentry.z6;
import io.sentry.z7;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.StringWriter;
import java.io.Writer;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x1 implements b1 {

    /* renamed from: c  reason: collision with root package name */
    private static final Charset f30949c = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final k7 f30950a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f30951b;

    public x1(k7 k7Var) {
        this.f30950a = k7Var;
        HashMap hashMap = new HashMap();
        this.f30951b = hashMap;
        hashMap.put(io.sentry.protocol.a.class, new a.C0399a());
        hashMap.put(Breadcrumb.class, new Breadcrumb.a());
        hashMap.put(io.sentry.protocol.b.class, new b.a());
        hashMap.put(io.sentry.protocol.c.class, new c.a());
        hashMap.put(DebugImage.class, new DebugImage.a());
        hashMap.put(io.sentry.protocol.d.class, new d.a());
        hashMap.put(io.sentry.protocol.e.class, new e.a());
        hashMap.put(e.b.class, new e.b.a());
        hashMap.put(io.sentry.protocol.h.class, new h.a());
        hashMap.put(io.sentry.protocol.j.class, new j.a());
        hashMap.put(io.sentry.protocol.k.class, new k.a());
        hashMap.put(io.sentry.protocol.l.class, new l.a());
        hashMap.put(io.sentry.protocol.m.class, new m.a());
        hashMap.put(io.sentry.protocol.n.class, new n.a());
        hashMap.put(m3.class, new m3.b());
        hashMap.put(n3.class, new n3.a());
        hashMap.put(q3.class, new q3.b());
        hashMap.put(r3.class, new r3.a());
        hashMap.put(io.sentry.profilemeasurements.a.class, new a.C0398a());
        hashMap.put(io.sentry.profilemeasurements.b.class, new b.a());
        hashMap.put(io.sentry.protocol.o.class, new o.a());
        hashMap.put(v3.class, new v3.b());
        hashMap.put(io.sentry.rrweb.a.class, new a.C0402a());
        hashMap.put(io.sentry.rrweb.c.class, new c.a());
        hashMap.put(io.sentry.rrweb.e.class, new e.a());
        hashMap.put(io.sentry.rrweb.f.class, new f.a());
        hashMap.put(io.sentry.rrweb.g.class, new g.a());
        hashMap.put(io.sentry.rrweb.i.class, new i.a());
        hashMap.put(io.sentry.rrweb.j.class, new j.a());
        hashMap.put(io.sentry.protocol.q.class, new q.a());
        hashMap.put(io.sentry.protocol.r.class, new r.a());
        hashMap.put(m5.class, new m5.a());
        hashMap.put(m6.class, new m6.a());
        hashMap.put(SentryEvent.class, new SentryEvent.a());
        hashMap.put(io.sentry.protocol.s.class, new s.a());
        hashMap.put(v6.class, new v6.a());
        hashMap.put(SentryLevel.class, new SentryLevel.a());
        hashMap.put(w6.class, new w6.a());
        hashMap.put(z6.class, new z6.a());
        hashMap.put(io.sentry.protocol.y.class, new y.a());
        hashMap.put(io.sentry.protocol.z.class, new z.a());
        hashMap.put(l7.class, new l7.a());
        hashMap.put(io.sentry.protocol.a0.class, new a0.a());
        hashMap.put(SentryStackFrame.class, new SentryStackFrame.a());
        hashMap.put(io.sentry.protocol.b0.class, new b0.a());
        hashMap.put(c5.class, new c5.a());
        hashMap.put(io.sentry.protocol.c0.class, new c0.a());
        hashMap.put(io.sentry.protocol.d0.class, new d0.a());
        hashMap.put(z7.class, new z7.a());
        hashMap.put(e8.class, new e8.a());
        hashMap.put(j8.class, new j8.a());
        hashMap.put(l8.class, new l8.a());
        hashMap.put(io.sentry.protocol.h0.class, new h0.a());
        hashMap.put(io.sentry.protocol.i.class, new i.a());
        hashMap.put(x8.class, new x8.a());
        hashMap.put(io.sentry.clientreport.c.class, new c.a());
        hashMap.put(io.sentry.protocol.j0.class, new j0.a());
        hashMap.put(io.sentry.protocol.i0.class, new i0.a());
    }

    private boolean g(Class cls) {
        if (!cls.isArray() && !Collection.class.isAssignableFrom(cls) && !String.class.isAssignableFrom(cls) && !Map.class.isAssignableFrom(cls)) {
            return false;
        }
        return true;
    }

    private String h(Object obj, boolean z10) {
        StringWriter stringWriter = new StringWriter();
        u1 u1Var = new u1(stringWriter, this.f30950a.getMaxDepth());
        if (z10) {
            u1Var.h("\t");
        }
        u1Var.j(this.f30950a.getLogger(), obj);
        return stringWriter.toString();
    }

    @Override // io.sentry.b1
    public void a(Object obj, Writer writer) {
        io.sentry.util.y.c(obj, "The entity is required.");
        io.sentry.util.y.c(writer, "The Writer object is required.");
        ILogger logger = this.f30950a.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        if (logger.d(sentryLevel)) {
            this.f30950a.getLogger().c(sentryLevel, "Serializing object: %s", h(obj, this.f30950a.isEnablePrettySerializationOutput()));
        }
        new u1(writer, this.f30950a.getMaxDepth()).j(this.f30950a.getLogger(), obj);
        writer.flush();
    }

    @Override // io.sentry.b1
    public void b(l5 l5Var, OutputStream outputStream) {
        io.sentry.util.y.c(l5Var, "The SentryEnvelope object is required.");
        io.sentry.util.y.c(outputStream, "The Stream object is required.");
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(new BufferedOutputStream(outputStream), f30949c));
        try {
            l5Var.b().serialize(new u1(bufferedWriter, this.f30950a.getMaxDepth()), this.f30950a.getLogger());
            bufferedWriter.write(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            for (l6 l6Var : l5Var.c()) {
                try {
                    byte[] I = l6Var.I();
                    l6Var.K().serialize(new u1(bufferedWriter, this.f30950a.getMaxDepth()), this.f30950a.getLogger());
                    bufferedWriter.write(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                    bufferedWriter.flush();
                    outputStream.write(I);
                    bufferedWriter.write(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                } catch (Exception e10) {
                    this.f30950a.getLogger().b(SentryLevel.ERROR, "Failed to create envelope item. Dropping it.", e10);
                }
            }
        } finally {
            bufferedWriter.flush();
        }
    }

    @Override // io.sentry.b1
    public Object c(Reader reader, Class cls) {
        Object V1;
        try {
            s1 s1Var = new s1(reader);
            m1 m1Var = (m1) this.f30951b.get(cls);
            if (m1Var != null) {
                V1 = cls.cast(m1Var.a(s1Var, this.f30950a.getLogger()));
            } else if (g(cls)) {
                V1 = s1Var.V1();
            } else {
                s1Var.close();
                return null;
            }
            s1Var.close();
            return V1;
        } catch (Exception e10) {
            this.f30950a.getLogger().b(SentryLevel.ERROR, "Error when deserializing", e10);
            return null;
        }
    }

    @Override // io.sentry.b1
    public l5 d(InputStream inputStream) {
        io.sentry.util.y.c(inputStream, "The InputStream object is required.");
        try {
            return this.f30950a.getEnvelopeReader().a(inputStream);
        } catch (IOException e10) {
            this.f30950a.getLogger().b(SentryLevel.ERROR, "Error deserializing envelope.", e10);
            return null;
        }
    }

    @Override // io.sentry.b1
    public Object e(Reader reader, Class cls, m1 m1Var) {
        Object V1;
        try {
            s1 s1Var = new s1(reader);
            if (Collection.class.isAssignableFrom(cls)) {
                if (m1Var == null) {
                    V1 = s1Var.V1();
                } else {
                    V1 = s1Var.g2(this.f30950a.getLogger(), m1Var);
                }
            } else {
                V1 = s1Var.V1();
            }
            s1Var.close();
            return V1;
        } catch (Throwable th2) {
            this.f30950a.getLogger().b(SentryLevel.ERROR, "Error when deserializing", th2);
            return null;
        }
    }

    @Override // io.sentry.b1
    public String f(Map map) {
        return h(map, false);
    }
}
