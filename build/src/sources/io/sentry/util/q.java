package io.sentry.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.b1;
import io.sentry.w1;
import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicIntegerArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private static final Charset f30395a = Charset.forName("UTF-8");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b extends Writer {

        /* renamed from: d  reason: collision with root package name */
        private long f30396d;

        private b() {
            this.f30396d = 0L;
        }

        private static int h(char c10) {
            if (c10 <= 127) {
                return 1;
            }
            if (c10 <= 2047 || Character.isSurrogate(c10)) {
                return 2;
            }
            return 3;
        }

        public long a() {
            return this.f30396d;
        }

        @Override // java.io.Writer, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }

        @Override // java.io.Writer, java.io.Flushable
        public void flush() {
        }

        @Override // java.io.Writer
        public void write(char[] cArr, int i10, int i11) {
            for (int i12 = i10; i12 < i10 + i11; i12++) {
                this.f30396d += h(cArr[i12]);
            }
        }

        @Override // java.io.Writer
        public void write(int i10) {
            this.f30396d += h((char) i10);
        }

        @Override // java.io.Writer
        public void write(String str, int i10, int i11) {
            for (int i12 = i10; i12 < i10 + i11; i12++) {
                this.f30396d += h(str.charAt(i12));
            }
        }
    }

    public static List a(AtomicIntegerArray atomicIntegerArray) {
        int length = atomicIntegerArray.length();
        ArrayList arrayList = new ArrayList(length);
        for (int i10 = 0; i10 < length; i10++) {
            arrayList.add(Integer.valueOf(atomicIntegerArray.get(i10)));
        }
        return arrayList;
    }

    public static long b(b1 b1Var, ILogger iLogger, w1 w1Var) {
        if (w1Var == null) {
            return 0L;
        }
        try {
            b bVar = new b();
            b1Var.a(w1Var, bVar);
            return bVar.a();
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Could not calculate size of serializable", th2);
            return 0L;
        }
    }

    public static byte[] c(b1 b1Var, ILogger iLogger, w1 w1Var) {
        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f30395a));
            b1Var.a(w1Var, bufferedWriter);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            bufferedWriter.close();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Could not serialize serializable", th2);
            return null;
        }
    }

    public static Map d(Calendar calendar) {
        HashMap hashMap = new HashMap();
        hashMap.put("year", Integer.valueOf(calendar.get(1)));
        hashMap.put("month", Integer.valueOf(calendar.get(2)));
        hashMap.put("dayOfMonth", Integer.valueOf(calendar.get(5)));
        hashMap.put("hourOfDay", Integer.valueOf(calendar.get(11)));
        hashMap.put("minute", Integer.valueOf(calendar.get(12)));
        hashMap.put("second", Integer.valueOf(calendar.get(13)));
        return hashMap;
    }
}
